#!/bin/bash
set -eux

echo "App name: $1"
echo "Version: $2"

# cd to working directory
cd BITBUCKET_REPO/

if [ "$1" != "railmapgen.github.io" ]
then
  # Clear artefact folder
  rm -rf $1/
  mkdir $1/

  # Copy artifacts
  cp -r ../"$1"/"$2"/* $1/
else
  # Copy artifacts
  cp -r ../"$1"/"$2"/* .
fi

### WRITE INFO.JSON
cat >./info.json <<EOF
{
  "component": "$1",
  "version": "$2",
  "environment": "PRD",
  "instance": "Bitbucket"
}
EOF

# Push
git add .
git commit -m "Release version $2 to Bitbucket"
git push
