#!/bin/bash
set -eux

# ls | sort -V

app="rmg-components"
versionList=(
6.0.0
6.0.1
6.1.0
6.1.1
6.1.2
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
