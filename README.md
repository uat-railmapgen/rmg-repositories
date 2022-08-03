# RMG Repositories

Here stores all the built artefacts of the RMG family.

## Release

Use [Release workflow](https://github.com/uat-railmapgen/rmg-repositories/actions/workflows/release.yml) to release specific version of RMG app on specific environment. 

During releasing, `info.json` is added to the root directory with component name, version and environment details. This file will be hosted at `/info.json`. 

![image](https://user-images.githubusercontent.com/9390786/160250034-c506cdf3-5c35-40d1-9bd1-13f99f899ffc.png)

## Housekeeping

[Example script](https://github.com/uat-railmapgen/rmg-repositories/commit/8775fe000641020aac498612034eb7aeb842eaa7)

We expect to keep the built versions based on the following rules:

1. All versions (including hased versions) of the latest major and latest minor versions.
2. The latest patch version (not hashed) of each of the other minor versions of the latest major version.
3. The latest minor version (not hashed) of each of the other major versions.

Example:

- 5.2.2
- 5.2.1
- 5.2.1.#97.62b342f
- 5.2.0
- 5.2.0-1
- 5.2.0-0
- 5.1.2
- ~5.1.2.#54.9c4259e~
- ~5.1.1~
- ~5.1.0~
- 5.0.9
- ~5.0.8~
- ...
- ~5.0.0~
- 4.10.2
- 3.6.7
- ...