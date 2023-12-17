#!/bin/bash
set -eux

# ls | sort -V

app="rmp-gallery"
versionList=(
1.6.0.tar.gz
1.6.1.tar.gz
1.6.10.tar.gz
1.6.11.tar.gz
1.6.12.tar.gz
1.6.13.tar.gz
1.6.14.tar.gz
1.6.15.tar.gz
1.6.16.tar.gz
1.6.17.tar.gz
1.6.18.tar.gz
1.6.19.tar.gz
1.6.2.tar.gz
1.6.20.tar.gz
1.6.21.tar.gz
1.6.3.tar.gz
1.6.4.tar.gz
1.6.5.tar.gz
1.6.6.tar.gz
1.6.7.tar.gz
1.6.8.tar.gz
1.6.9.tar.gz
1.7.0.tar.gz
1.7.1.tar.gz
1.7.2.tar.gz
)

for version in ${versionList[*]}
do
  rm -f $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
