#!/bin/sh
# Kurze Adresse fuer den Start von plaintext-demo: reicht an das Startskript im Repo weiter.
# Die Funktion verhindert, dass ein halb geladenes Skript ausgefuehrt wird.
set -eu
main() {
  curl -fsSL https://raw.githubusercontent.com/Plaintext-Gmbh/plaintext-demo/main/start.sh | sh -s -- "$@"
}
main "$@"
