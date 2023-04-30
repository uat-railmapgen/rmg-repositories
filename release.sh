#!/bin/bash
set -eux

echo "App name: $1"
echo "Version: $2"
echo "Environment: $3"

# Checkout to gh-pages branch
cd TARGET_REPO/
{ git checkout gh-pages; } || { git checkout -b gh-pages; }

# Clear folder
cd ..
rm -rf TARGET_REPO/*

# Copy artifacts
cp -r ./"$1"/"$2"/* TARGET_REPO/

### BYPASS JEKYLL
touch .nojekyll

### WRITE INFO.JSON
cat >TARGET_REPO/info.json <<EOF
{
  "component": "$1",
  "version": "$2",
  "environment": "$3",
  "instance": "GitHub"
}
EOF

# Push
cd TARGET_REPO
git add .
git commit -m "Release version $2 to $3"
git push -u origin gh-pages
