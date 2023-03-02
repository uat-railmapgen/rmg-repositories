#!/bin/bash
set -eux

# ls | sort -V

app="rmg-translate"
versionList=(
0.0.3
0.1.0
0.2.0
0.2.1
0.2.2
0.2.3
0.3.0
0.3.1
0.4.0
0.4.1
1.0.1
1.1.0
1.1.1
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
