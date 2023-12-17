#!/bin/bash
set -eux

# ls | sort -V

app="rmg-templates"
versionList=(
1.0.0.tar.gz
1.0.1.tar.gz
1.0.10.tar.gz
1.0.11.tar.gz
1.0.12.tar.gz
1.0.13.tar.gz
1.0.14.tar.gz
1.0.15.tar.gz
1.0.16.tar.gz
1.0.17.tar.gz
1.0.18.tar.gz
1.0.19.tar.gz
1.0.2.tar.gz
1.0.20.tar.gz
1.0.21.tar.gz
1.0.22.tar.gz
1.0.23.tar.gz
1.0.24.tar.gz
1.0.3.tar.gz
1.0.4.tar.gz
1.0.5.tar.gz
1.0.6.tar.gz
1.0.7.tar.gz
1.0.8.tar.gz
1.0.9.tar.gz
)

for version in ${versionList[*]}
do
  rm -f $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
