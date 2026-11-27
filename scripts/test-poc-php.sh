#!/bin/bash
# Karte 2434: prüft public/api/poc.php lokal in php:8.3-cli. mail() schreibt in eine Datei statt zu senden.
# Aufruf: scripts/test-poc-php.sh   (braucht docker und curl)
set -euo pipefail
cd "$(dirname "$0")/.."
NAME=poc-php-test-$$
docker run -d --rm --name "$NAME" -p 127.0.0.1:18085:8080 -v "$PWD/public/api:/app:ro" php:8.3-cli \
  php -d 'sendmail_path=tee -a /tmp/mail.eml >/dev/null' -S 0.0.0.0:8080 -t /app >/dev/null
trap 'docker rm -f "$NAME" >/dev/null 2>&1 || true' EXIT
U=http://127.0.0.1:18085/poc.php
for i in $(seq 20); do curl -s -o /dev/null "$U" && break; sleep 0.5; done
fails=0
check() { # name erwarteter-code curl-args...
  local name=$1 want=$2; shift 2
  local got; got=$(curl -s -o /tmp/poc-body.$$ -w '%{http_code}' "$U" "$@")
  if [[ "$got" == "$want" ]]; then echo "ok   $name ($got)"; else echo "FAIL $name: erwartet $want, erhalten $got: $(cat /tmp/poc-body.$$)"; fails=$((fails+1)); fi
}
OK=(-F company=ACME -F name=Muster -F email=a@example.com -F app=Test -F src=repo -F repo=https://github.com/x/y -F t=5000 -F summary=Hallo)
check "GET abgelehnt" 405
check "Honeypot still ok" 200 "${OK[@]}" -F website=spam
check "zu schnell still ok" 200 -F company=ACME -F t=100
check "Pflichtfelder fehlen" 400 -F company=ACME -F t=5000
check "E-Mail mit Zeilenumbruch" 400 -F company=ACME -F name=X -F app=Y -F src=repo -F repo=https://a.b -F t=5000 -F $'email=a@example.com\r\nBcc: x@y.z'
check "Kein ZIP" 400 "${OK[@]/src=repo/src=zip}" -F "source=@README.md"
python3 -c "import zipfile,sys; zipfile.ZipFile(sys.argv[1],'w').writestr('a.txt','x')" /tmp/poc-$$.zip
check "gültig mit ZIP" 200 "${OK[@]/src=repo/src=zip}" -F "source=@/tmp/poc-$$.zip;filename=co de.zip"
check "gültig mit Repo" 200 "${OK[@]}"
check "dritte gültige" 200 "${OK[@]}"
check "Rate-Limit je IP" 429 "${OK[@]}"
mails=$(docker exec "$NAME" grep -c '^To: hello@plaintext.ch' /tmp/mail.eml || true)
att=$(docker exec "$NAME" grep -c 'filename="co_de.zip"' /tmp/mail.eml || true)
bcc=$(docker exec "$NAME" grep -ci '^Bcc:' /tmp/mail.eml || true)
echo "Mails: $mails (erwartet 3), Anhang: $att (erwartet 1), Bcc-Kopfzeilen: $bcc (erwartet 0)"
[[ "$mails" == 3 && "$att" == 1 && "$bcc" == 0 ]] || fails=$((fails+1))
rm -f /tmp/poc-body.$$ /tmp/poc-$$.zip
echo "Fehler: $fails"; exit $fails
