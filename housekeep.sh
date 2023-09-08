#!/bin/bash
set -eux

# ls | sort -V

app="rmg-components"
versionList=(
7.0.0
7.0.1
7.0.2
7.0.3
7.0.4
7.1.0
7.1.1
7.1.2
7.1.3
7.1.4
7.1.5
7.1.6
7.1.7
7.1.8
7.1.9
7.1.10
7.1.11
7.1.12
7.1.13
7.2.0
7.2.1
7.2.2
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
