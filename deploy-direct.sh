#!/bin/bash
set -euo pipefail

# Direct FTPS upload to Hostpoint for marthaler.io.
#
# Hostpoint serves multiple sites under www/<domain>/ on the same account
# (fernwege.ch, plaintext.ch, schlossgut-worb.ch, …). It is *critical* that
# we cd into the marthaler.io subdirectory before mirroring, otherwise
# `mirror --delete-first . .` would wipe every other site.

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== Direct Hostpoint Upload (marthaler.io) ===${NC}"

# Credentials. We support two locations: the historical openclaw path and a
# repo-local override that lives outside of git (`~/code/.../.ftpconfig.json`).
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

echo -e "${YELLOW}Uploading to Hostpoint (www/marthaler.io)...${NC}"
cd dist

# `cd www/marthaler.io` is the safety belt — we never mirror against `www/`
# itself, because that would delete sibling sites under the same account.
lftp -c "
set ftps:initial-prot '';
set ftp:ssl-force true;
set ftp:ssl-protect-data true;
set ssl:verify-certificate no;
open -u '$FTP_USER','$FTP_PASS' $FTP_SERVER;
cd www/marthaler.io;
mirror -R --delete-first --verbose --parallel=4 . .;
quit
"

echo -e "${GREEN}Upload successful${NC}"
echo -e "${GREEN}https://marthaler.io${NC}"
