#!/bin/bash
set -eux

# ls | sort -V

app="seed-project"
versionList=(
0.1.1
0.1.2
0.1.3
0.1.4
0.1.5
0.2.0
0.2.1
0.2.2
0.2.3
0.2.4
0.3.0
0.3.1
0.3.2
0.3.3
0.3.4
0.3.5
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
