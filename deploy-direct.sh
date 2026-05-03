#!/bin/bash
set -euo pipefail

# Direct FTPS upload to Hostpoint for plaintext.ch.
#
# The Hostpoint account hosts multiple sites under www/<domain>/
# (fernwege.ch, plaintext.ch, schlossgut-worb.ch, …). The cd to
# www/plaintext.ch/ below is the safety belt — never mirror against
# www/ itself or every other site gets nuked.
#
# Operational files that live next to the site but must NOT be touched
# by a deploy (private uploads, server-side logs, large backup zips, the
# watch.php endpoint with its API token) are kept out via --exclude-glob
# patterns. Anything matching them is left alone on the remote.

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== Hostpoint Upload (www/plaintext.ch) ===${NC}"

CREDS_CANDIDATES=(
  "$HOME/.openclaw/workspace/credentials/ftp-hostpoint.json"
  "$HOME/code/plaintext-website/.ftpconfig.json"
)
CREDS_FILE=""
for c in "${CREDS_CANDIDATES[@]}"; do
  if [ -f "$c" ]; then CREDS_FILE="$c"; break; fi
done

if [ -z "$CREDS_FILE" ]; then
  echo -e "${RED}Credentials file not found in any of:${NC}"
  printf '  - %s\n' "${CREDS_CANDIDATES[@]}"
  exit 1
fi
echo -e "${YELLOW}Using credentials:${NC} $CREDS_FILE"

FTP_SERVER=$(jq -r .server "$CREDS_FILE")
FTP_USER=$(jq -r .username "$CREDS_FILE")
FTP_PASS=$(jq -r .password "$CREDS_FILE")

echo -e "${YELLOW}Building website...${NC}"
npm run build

echo -e "${YELLOW}Uploading to Hostpoint (www/plaintext.ch)...${NC}"
cd dist

lftp -c "
set ftps:initial-prot '';
set ftp:ssl-force true;
set ftp:ssl-protect-data true;
set ssl:verify-certificate no;
open -u '$FTP_USER','$FTP_PASS' $FTP_SERVER;
cd www/plaintext.ch;
mirror -R --delete-first --verbose --parallel=4 \
  --exclude-glob '*.zip' \
  --exclude-glob '*.log' \
  --exclude-glob '*.txt' \
  --exclude-glob 'watch.php' \
  --exclude-glob 'privat*' \
  --exclude-glob '42.png' \
  --exclude-glob 'logo.png' \
  . .;
quit
"

echo -e "${GREEN}Upload successful${NC}"
echo -e "${GREEN}https://plaintext.ch${NC}"
