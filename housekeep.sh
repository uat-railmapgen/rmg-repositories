#!/bin/bash
set -eux

# ls | sort -V

app="rmg"
versionList=(
5.9.0
5.9.1
5.9.10
5.9.11
5.9.12
5.9.13
5.9.14
5.9.15.#531.3a63623
5.9.15.#531.ebff6f4
5.9.15
5.9.16
5.9.17
5.9.18
5.9.19
5.9.2
5.9.20
5.9.21
5.9.22
5.9.23
5.9.24.#539.9eae112
5.9.24
5.9.25
5.9.26.#539.628fb32
5.9.3
5.9.4.#521-Fix-downloading-mtr-images-in-Firefox.c1842a9
5.9.4
5.9.5
5.9.6
5.9.7
5.9.8
5.9.9
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
