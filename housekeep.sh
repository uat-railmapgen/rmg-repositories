#!/bin/bash
set -eux

# ls | sort -V

app="rmp-gallery"
versionList=(
1.4.0.tar.gz
1.4.1.tar.gz
1.4.10.#620-Accept-donation.2fd3a38.tar.gz
1.4.10.#620-Accept-donation.323da85.tar.gz
1.4.10.tar.gz
1.4.11.tar.gz
1.4.12.tar.gz
1.4.2.tar.gz
1.4.3.tar.gz
1.4.4.tar.gz
1.4.5.tar.gz
1.4.6.tar.gz
1.4.7.tar.gz
1.4.8.tar.gz
1.4.9.tar.gz
1.5.10.tar.gz
1.5.11.tar.gz
1.5.12.tar.gz
1.5.13.tar.gz
1.5.14.tar.gz
1.5.15.tar.gz
1.5.16.tar.gz
1.5.17.tar.gz
1.5.18.tar.gz
1.5.19.tar.gz
)

for version in ${versionList[*]}
do
  rm -f $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
