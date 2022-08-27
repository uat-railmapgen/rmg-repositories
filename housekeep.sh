#!/bin/bash
set -eux

app="rmg-components"
versionList=(
1.0.0
1.0.1
1.0.2
1.1.0
1.1.1
1.2.0
2.0.0
2.0.1
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
