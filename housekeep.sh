#!/bin/bash
set -eux

app="rmg"
versionList=(
5.5.0
5.5.0-0.#418.63485dc
5.5.0.#418.6337861
5.5.1
5.5.2
5.5.3
5.5.4
5.5.5
5.5.5.#427-step-2.5660b57
5.5.6
5.5.7
5.5.8
5.5.9
5.5.10
5.5.11
5.5.12
5.5.13
5.5.13.#437.5a2e773
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
