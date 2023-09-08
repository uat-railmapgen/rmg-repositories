#!/bin/bash
set -eux

# ls | sort -V

app="rmg-palette"
versionList=(
0.9.0
0.9.1
0.9.1.#779.60e5928
0.9.2
0.9.2.#760.83c5987
0.9.3
0.9.4
0.9.5
0.9.6
0.9.7
0.9.8
0.9.9
0.9.10
0.9.11
0.9.12
0.9.13
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
