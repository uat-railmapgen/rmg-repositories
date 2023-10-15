#!/bin/bash
set -eux

# ls | sort -V

app="rmp-gallery"
versionList=(
1.5.0.tar.gz
1.5.1.tar.gz
1.5.3.tar.gz
1.5.4.tar.gz
1.5.5.tar.gz
1.5.6.tar.gz
1.5.7.tar.gz
1.5.8.tar.gz
1.5.9.tar.gz
)

for version in ${versionList[*]}
do
  rm -f $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
