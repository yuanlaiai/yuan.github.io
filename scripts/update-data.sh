#!/bin/bash
# Regenerate data.js from data.json
# Usage: bash scripts/update-data.sh

DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$DIR"

if [ ! -f "data.json" ]; then
  echo "Error: data.json not found in $DIR"
  exit 1
fi

# Wrap data.json as a JS variable (compact, no indent to save file size)
echo '// GitHub AI Hot Projects - Data File' > data.js
echo '// Edit data.json and run: bash scripts/update-data.sh' >> data.js
echo '' >> data.js
echo -n 'var siteData = ' >> data.js
cat data.json >> data.js
echo ';' >> data.js

echo "Done! data.js regenerated from data.json ($(wc -c < data.json) bytes -> $(wc -c < data.js) bytes)"
