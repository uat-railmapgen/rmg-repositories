#!/bin/bash
set -eux

# ls | sort -V

app="rmg-components"
versionList=(
4.0.0
4.3.0
4.3.1
4.3.2
4.3.3
4.3.4
4.3.5
4.3.6
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
