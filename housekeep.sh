#!/bin/bash
set -eux

# ls | sort -V

app="rmg-components"
versionList=(
2.0.2
2.1.0
2.1.1
3.0.0
3.0.1
4.1.0
4.2.0
4.2.1
4.2.2
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
