#!/bin/bash
set -eux

versionList=(
5.4.0
5.4.0-0.#399-1.74a7762
5.4.1
5.4.1.#400.3cb66f8
5.4.2
5.4.3
5.4.4
5.4.5
5.4.6
5.4.7
5.4.8
5.4.9
5.4.10
5.4.11
5.4.12
5.4.12.#399-3.be8b86d
5.4.13
5.4.14
5.4.15
5.4.16
5.4.17
5.4.18
5.4.19
5.4.20
5.4.21
5.4.22
5.4.25

)

for version in ${versionList[*]}
do
  rm -rf rmg/$version
done

# Push
git add .
git commit -m "rmg housekeeping at $(date)"
git push
