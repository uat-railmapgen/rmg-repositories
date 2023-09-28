#!/bin/bash
set -eux

# ls | sort -V

app="rmg-components"
versionList=(
8.0.0
8.1.0
8.2.0
8.2.1
8.2.2
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
