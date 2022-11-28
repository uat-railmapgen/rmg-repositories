#!/bin/bash
set -eux

# ls | sort -V

app="railmapgen.github.io"
versionList=(
0.1.4
0.1.5
0.1.5.#4.2ee16ad
0.1.6
0.1.7
0.2.0
0.2.1
0.2.2
0.2.3
0.2.4
0.2.5
0.2.6
0.2.7
0.2.8
0.2.9
0.2.10
0.2.11
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
