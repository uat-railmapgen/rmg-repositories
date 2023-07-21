#!/bin/bash
set -eux

# ls | sort -V

app="rmg"
versionList=(
5.8.2.#476.191c380
5.10.0
5.10.1
5.10.2
5.10.3
5.10.4
5.10.5
5.10.6
5.10.7
5.10.8
5.10.9
5.10.10
5.10.11
5.10.12
5.10.12.#551-Fix-Shmetro-Coline-Bugs.ab9c840
5.10.13
5.10.14
5.10.15
5.10.16
5.10.17
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
