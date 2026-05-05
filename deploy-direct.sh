#!/bin/bash
set -euo pipefail

# Direct rsync-over-SSH upload to Hostpoint for plaintext.ch.
#
# The Hostpoint account hosts multiple sites under www/<domain>/
# (fernwege.ch, plaintext.ch, schlossgut-worb.ch, ...). The target path
# www/plaintext.ch/ below is the safety belt — never sync against www/
# itself or every other site gets nuked.
#
# Operational files that live next to the site but must NOT be touched
# by a deploy (private uploads, server-side logs, large backup zips, the
# watch.php endpoint with its API token, integration/* per-branch builds)
# are kept out via --exclude patterns. rsync excludes are bidirectional —
# excluded files become invisible to rsync, so --delete leaves them alone
# on the remote.

SSH_TARGET="${SSH_TARGET:-danielm9@sl237.web.hostpoint.ch}"
REMOTE_PATH="${REMOTE_PATH:-www/plaintext.ch/}"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== Hostpoint Upload (www/plaintext.ch) via rsync/ssh ===${NC}"

echo -e "${YELLOW}Building website...${NC}"
npm run build

echo -e "${YELLOW}Uploading to ${SSH_TARGET}:${REMOTE_PATH}${NC}"
rsync -avz --delete \
  --exclude='*.zip' \
  --exclude='*.log' \
  --exclude='*.txt' \
  --exclude='watch.php' \
  --exclude='privat*' \
  --exclude='42.png' \
  --exclude='logo.png' \
  --exclude='integration/' \
  ./dist/ \
  "${SSH_TARGET}:${REMOTE_PATH}"

echo -e "${GREEN}Upload successful — https://plaintext.ch${NC}"
