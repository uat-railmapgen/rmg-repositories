#!/bin/bash
set -eux

# ls | sort -V

app="rmg-components"
versionList=(
4.0.1
4.1.1
4.2.3
4.3.7
4.4.0
4.4.1
4.4.2
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
