#!/bin/bash
set -eux

# ls | sort -V

app="railmapgen.github.io"
versionList=(
0.1.8
0.2.12
0.3.0
0.4.0
0.4.1
0.4.2
0.4.3
0.4.4
0.4.6
0.4.7
0.4.8
0.5.0
0.5.1.#25.31ffeb4
0.5.1.#25.bba83a3
0.5.1
0.5.2
0.5.3
0.5.4.#30.3aa952a
0.5.4.#30.ca2424f
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
