#!/bin/bash
set -eux

# ls | sort -V

app="rmg"
versionList=(
5.11.0
5.11.1
5.11.2
5.11.3
5.11.4
5.11.5
5.11.6
5.11.7
5.11.8
5.11.9
5.11.10
5.11.11
5.11.12
5.11.12.#554-Release-offline-applications-with-Tauri.bd43699
5.11.13
5.11.14
5.11.15
5.11.16
5.11.17
5.11.18
5.11.19
5.11.20
5.11.21
5.11.22
5.11.22.#558.e340f87
5.11.23
5.11.24
5.11.25
5.11.26
5.11.27.#563.f4429b2
)

for version in ${versionList[*]}
do
  rm -rf $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
