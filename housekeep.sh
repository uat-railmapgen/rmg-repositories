#!/bin/bash
set -eux

# ls | sort -V

app="rmg-palette"
versionList=(
0.10.0
0.10.1
0.10.2
0.10.3
0.10.4
0.10.5
0.10.6
0.10.7
0.10.8
0.10.9
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
