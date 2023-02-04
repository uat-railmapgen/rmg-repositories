#!/bin/bash
set -eux

# ls | sort -V

app="rmg-templates"
versionList=(
0.1.1
0.1.2
0.1.3
0.1.4
0.1.5
0.1.6
0.1.7
0.1.9
0.1.10
0.1.12
0.2.0
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
