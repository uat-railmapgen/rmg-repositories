#!/bin/bash
set -eux

# ls | sort -V

app="rmp"
versionList=(
1.0.6.tar.gz
2.0.18.tar.gz
2.1.10.tar.gz
2.2.5.tar.gz
2.3.10.tar.gz
2.4.13.tar.gz
2.5.13.tar.gz
3.2.11.#241-rotate-perpendicular-path.088beac.tar.gz
3.2.11.#241-rotate-perpendicular-path.79128f3.tar.gz
3.2.11.#241-rotate-perpendicular-path.c453dbc.tar.gz
3.2.11.#262-Facilities-for-Beijing.be4bcc5.tar.gz
3.2.11.#262-Facilities-for-Beijing.e6b673e.tar.gz
3.2.11.tar.gz
3.2.12.tar.gz
3.2.13.#262-Facilities-for-Beijing.7d635d7.tar.gz
3.2.13.#262-Facilities-for-Beijing.dca4eb6.tar.gz
3.2.13.tar.gz
3.2.14.tar.gz
3.2.15.tar.gz
3.2.16.tar.gz
3.2.17.tar.gz
3.2.18.#262-Facilities-for-Beijing.f62848f.tar.gz
3.2.18.tar.gz
3.2.19.tar.gz
3.2.20.tar.gz
3.2.21.tar.gz
3.2.22.tar.gz
3.2.23.#432-Fix-use-during-exporting-in-Safari.15bafb2.tar.gz
3.2.23.#433-Accept-donation.ed602fc.tar.gz
3.2.23.tar.gz
3.2.24.tar.gz
3.2.25.tar.gz
3.2.26.tar.gz
3.2.27.#441-chongqing-rt-num-badge-wrong-location.4dd53b4.tar.gz
3.2.27.#441-chongqing-rt-num-badge-wrong-location.675f408.tar.gz
3.3.0.#445.b8e14b0.tar.gz
3.3.0.#445.ef41369.tar.gz
3.3.0.tar.gz
3.3.1.tar.gz
3.3.10.#472-Kunming-Rail-Transit-stations.16d0f99.tar.gz
3.3.10.tar.gz
3.3.11.tar.gz
3.3.12.#212-Copy-Paste-nodes.966b20c.tar.gz
3.3.12.#458-shenzhen-metro-branch-line-badge.3f21807.tar.gz
3.3.12.#458-shenzhen-metro-branch-line-badge.da7217c.tar.gz
3.3.12.tar.gz
3.3.13.#484-drag-to-select.34de6bd.tar.gz
3.3.13.#484-drag-to-select.6202f61.tar.gz
3.3.13.tar.gz
3.3.14.tar.gz
3.3.15.tar.gz
3.3.16.#492-Use-@railmapgen.svg-assets-for-gzmtr-icons.5a72bf7.tar.gz
3.3.16.tar.gz
3.3.17.#338-selection-detail.736eb69.tar.gz
3.3.17.tar.gz
3.3.18.tar.gz
3.3.19.tar.gz
3.3.2.tar.gz
3.3.20.#488-Show-a-warning-element-for-missing-nodes.ff9a355.tar.gz
3.3.20.tar.gz
3.3.21.tar.gz
3.3.22.tar.gz
3.3.23.tar.gz
3.3.24.tar.gz
3.3.25.tar.gz
3.3.26.tar.gz
3.3.27.tar.gz
3.3.28.tar.gz
3.3.29.tar.gz
3.3.3.tar.gz
3.3.30.tar.gz
3.3.31.tar.gz
3.3.32.#506-Singapore-MRT-stations.59711cd.tar.gz
3.3.32.#506-Singapore-MRT-stations.dd8bfde.tar.gz
3.3.4.tar.gz
3.3.5.tar.gz
3.3.6.tar.gz
3.3.7.#240-Polygon-node.9d50395.tar.gz
3.3.7.tar.gz
3.3.8.tar.gz
3.3.9.tar.gz
)

for version in ${versionList[*]}
do
  rm -f $app/$version
done

# Push
git add .
git commit -m "$app housekeeping at $(date)"
git push
