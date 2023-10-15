#!/bin/bash
set -eux

# ls | sort -V

app="rmp-gallery"
versionList=(
1.3.27.tar.gz
1.3.28.#136-Filter-and-sort.4805c7b.tar.gz
1.5.2.tar.gz
1.5.20.tar.gz
1.5.21.tar.gz
)

for version in ${versionList[*]}
do
  rm -f $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
