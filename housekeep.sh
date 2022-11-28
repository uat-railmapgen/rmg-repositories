#!/bin/bash
set -eux

# ls | sort -V

app="rmg-palette"
versionList=(
0.5.0
0.5.0-0.#97.62b342f
0.5.3
0.5.5
0.6.0
0.6.2
0.6.4
0.6.5
0.6.9
0.6.14
0.6.15
0.6.17
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
