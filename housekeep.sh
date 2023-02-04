#!/bin/bash
set -eux

# ls | sort -V

app="rmg"
versionList=(
5.7.0
5.7.0-0.#40.c4e9b2e
5.7.0.#40.f318652
5.7.1
5.7.2
5.7.2.#40.8c13a93
5.7.3
5.7.4
5.7.5
5.7.6
5.7.7
5.7.8
5.7.9
5.7.10
5.7.11
5.7.12
5.7.13
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
