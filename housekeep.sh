#!/bin/bash
set -eux

# ls | sort -V

app="rmg"
versionList=(
5.1.6.#369.d50cf65
5.6.0
5.6.0-0.#440.e9f8157
5.6.1
5.6.2
5.6.3
5.6.4
5.6.5
5.6.6
5.6.6.#451.6b8272d
5.6.7
5.6.8
5.6.8.#458.6cbaf71
5.6.9
5.6.10
5.6.11
5.6.12
5.6.13
5.6.14
5.6.15
5.6.18
5.6.19
5.6.20
5.6.21
5.6.22
5.6.23
5.6.23.#40.cfac104
5.6.24
5.6.25
5.6.26
5.6.27
5.6.28
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
