#!/bin/bash
set -eux

echo "App name: $1"
echo "Version: $2"

# cd to working directory
cd GITLAB_REPO/

# Clear artefact folder
rm -rf public
mkdir public

# Copy artifacts
cp -r ../"$1"/"$2"/* public/

### WRITE INFO.JSON
cat >public/info.json <<EOF
{
  "component": "$1",
  "version": "$2",
  "environment": "PRD",
  "instance": "GitLab"
}
EOF

# Push
git add .
git commit -m "Release version $2 to GitLab"
git push
