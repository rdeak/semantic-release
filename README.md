# Semantic Release Action

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This action creates release with changelog, and if NPM_TOKEN is set it publishes package to NPM.

## Inputs

| Name         | Required | Description                      |
|--------------|----------|----------------------------------|
| GITHUB_TOKEN | Yes      | It's needed to push version tag. |
| NPM_TOKEN    |          | Valid NPM token                  |

## Outputs

| Name                  | Description                              |
|-----------------------|------------------------------------------|
| new_release_created   | Flag if new release created (true/false) |
| release_version       | Latest released version eg. 1.0.1        |
| release_major_version | Latest major version eg. 1               |
| release_tag           | Latest version tag eg. v1.0.1            |

## Environment variables

| Name                  | Description                              |
|-----------------------|------------------------------------------|
| NEW_RELEASE_CREATED   | Flag if new release created (true/false) |
| RELEASE_VERSION       | Latest released version eg. 1.0.1        |
| RELEASE_MAJOR_VERSION | Latest major version eg. 1               |
| RELEASE_TAG           | Latest version tag eg. v1.0.1            |

## Example usage

```yaml
name: Release
on:
  push:
    branches:
      - main
jobs:
  Release:
    runs-on: ubuntu-latest
    permissions:
      contents: write # without it release and tag can't be created
    steps:
      uses: rdeak/semantic-release-action@v1
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

To create release tag and publish dist to NPM

```yaml
name: Release
on:
  push:
    branches:
      - main
jobs:
  Release:
    runs-on: ubuntu-latest
    permissions:
      contents: write # without it release and tag can't be created
    steps:
      uses: rdeak/semantic-release-action@v1
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        NPM_TOKEN: ${{ secrets.NPM_TOKEN 
```

## License

This project is licensed under the terms of the MIT license.
