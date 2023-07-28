#!/bin/bash
set -eux

# ls | sort -V

app="rmg-templates"
versionList=(
0.1.13
0.2.3
0.3.49
0.4.0
0.4.1
0.4.2
0.4.3
0.4.4
0.4.5
0.4.6
0.4.6.#459.238ed8d
0.4.7
0.4.8
0.4.9
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
