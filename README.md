# Semantic Release Action

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This action creates release with change log, and if NPM_TOKEN is set it publishes package to NPM.

## Inputs

| Name         | Required | Description                      |
| ------------ | -------- | -------------------------------- |
| GITHUB_TOKEN | Yes      | It's needed to push version tag. |
| NPM_TOKEN    |          | Valid NPM token                  |

## Outputs

| Name            | Description                       |
| --------------- | --------------------------------- |
| RELEASE_VERSION | Latest released version eg. 1.0.1 |
| RELEASE_TAG     | Latest version tag eg. v1.0.1     |

## Environment variables

| Name            | Description                       |
| --------------- | --------------------------------- |
| RELEASE_VERSION | Latest released version eg. 1.0.1 |
| RELEASE_TAG     | Latest version tag eg. v1.0.1     |

## Example usage

```yaml
uses: rdeak/semantic-release-action
with:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## License

This project is licensed under the terms of the MIT license.
