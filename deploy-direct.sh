#!/bin/bash
set -e

# Direct FTP upload to Hostpoint
# Bypasses GitHub Actions

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}=== Direct Hostpoint Upload ===${NC}"

# Read credentials
CREDS_FILE="$HOME/.openclaw/workspace/credentials/ftp-hostpoint.json"
if [ ! -f "$CREDS_FILE" ]; then
    echo -e "${RED}❌ Credentials file not found: $CREDS_FILE${NC}"
    exit 1
fi

FTP_SERVER=$(jq -r .server "$CREDS_FILE")
FTP_USER=$(jq -r .username "$CREDS_FILE")
FTP_PASS=$(jq -r .password "$CREDS_FILE")

echo -e "${YELLOW}Building website...${NC}"
npm run build

echo -e "${YELLOW}Uploading to Hostpoint...${NC}"
cd dist

# Use lftp with explicit FTPS settings for Hostpoint
lftp -c "
set ftps:initial-prot '';
set ftp:ssl-force true;
set ftp:ssl-protect-data true;
set ssl:verify-certificate no;
open -u '$FTP_USER','$FTP_PASS' $FTP_SERVER;
cd www;
mirror -R --delete-first --verbose . .;
quit
"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Upload successful!${NC}"
    echo -e "${GREEN}🌐 Website: https://marthaler.io${NC}"
else
    echo -e "${RED}❌ Upload failed!${NC}"
    exit 1
fi