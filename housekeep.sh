#!/bin/bash
set -eux

# ls | sort -V

app="rmg"
versionList=(
5.12.0
5.12.1
5.12.2
5.12.3
5.12.4
5.12.5
5.12.5.#566.e92d248
5.12.6
5.12.7
5.13.0
5.13.0.#570.ed246c7
5.13.1
5.13.2
5.13.3
5.13.4
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
