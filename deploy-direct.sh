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
# Deploy-Key (ed25519, bei Hostpoint autorisiert; derselbe wie im GitHub-Secret
# SSH_PRIVATE_KEY). ~/.ssh/id_rsa ist auf dem Mac kein Key, darum explizit + IdentitiesOnly.
SSH_KEY="${SSH_KEY:-$HOME/.ssh/plaintext-website-deploy}"
# DRY_RUN=1 → rsync -n: zeigt, was übertragen/gelöscht würde, fasst den Server nicht an.
DRY_RUN="${DRY_RUN:-0}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Safety-Belt-Guard: REMOTE_PATH ist per Env überschreibbar und wird unten mit
# `rsync --delete` auf einem Shared-Host (mehrere Sites unter www/<domain>/) genutzt.
# Ein leerer/zu breiter Pfad (www/, /, ..) würde fremde Sites löschen. Darum hart
# validieren: muss genau eine Domain-Ebene unter www/ sein und mit / enden.
if [[ ! "$REMOTE_PATH" =~ ^www/[A-Za-z0-9._-]+/(integration/[A-Za-z0-9._-]+/)?$ ]]; then
  echo "FEHLER: REMOTE_PATH='${REMOTE_PATH}' ist kein erlaubtes Ziel (erwartet: www/<domain>/ )." >&2
  echo "        rsync --delete gegen einen zu breiten Pfad würde fremde Sites löschen — Abbruch." >&2
  exit 1
fi

if [[ ! -r "$SSH_KEY" ]]; then
  echo "FEHLER: SSH-Key '${SSH_KEY}' nicht lesbar (SSH_KEY=... setzen)." >&2
  exit 1
fi

RSYNC_OPTS=(-avz --delete -e "ssh -i ${SSH_KEY} -o IdentitiesOnly=yes")
[[ "$DRY_RUN" == "1" ]] && RSYNC_OPTS+=(--dry-run)

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== Hostpoint Upload (${REMOTE_PATH}) via rsync/ssh ===${NC}"

echo -e "${YELLOW}Building website...${NC}"
npm run build

echo -e "${YELLOW}Uploading to ${SSH_TARGET}:${REMOTE_PATH}$([[ "$DRY_RUN" == "1" ]] && echo ' (DRY RUN)')${NC}"
# Schutz-Excludes als Single Source of Truth in deploy-excludes.txt (geteilt mit DeployProd.yml).
rsync "${RSYNC_OPTS[@]}" \
  --exclude-from="${SCRIPT_DIR}/deploy-excludes.txt" \
  ./dist/ \
  "${SSH_TARGET}:${REMOTE_PATH}"

if [[ "$DRY_RUN" == "1" ]]; then
  echo -e "${GREEN}Dry run fertig — nichts übertragen${NC}"
else
  echo -e "${GREEN}Upload successful — https://plaintext.ch${NC}"
fi
