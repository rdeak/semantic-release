# semantic-release-config

[![npm version](https://img.shields.io/npm/v/@rdeak/semantic-release-config/latest.svg)](https://www.npmjs.com/package/@rdeak/semantic-release-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Configuration for semantic-release for GitHub with
[conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/), GitHub releases, changelog and npm publishing.

## Commit message rules

| Commit message type | Semver |
| ------------------- | ------ |
| perf                | patch  |
| refactor            | patch  |
| fix                 | patch  |
| feat                | minor  |
| BREAKING CHANGE     | major  |

## Installation

```bash
npm install --save-dev semantic-release @rdeak/semantic-release-config
```

## Usage

1. Create `.releaserc.json` file in repository root, and add this into it:

```json
{
  "extends": "@rdeak/semantic-release-config"
}
```

2. [Create NPM token](https://docs.npmjs.com/creating-and-viewing-access-tokens) and
   add it into [Github repository secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) as `NPM_TOKEN`.

   [Read more](https://github.com/jednano/semantic-release-npm-github-config#plugins) in documentation.

3. (optional) if you have scoped package add this into your `package.json`

```json
"publishConfig": {
    "access": "public"
  },
```

4. (optional) if you get [SemanticReleaseError: Invalid npm token](https://github.com/semantic-release/semantic-release/issues/2313) please create `.npmrc` in repository root, and add this:

```
registry=https://registry.npmjs.org/
```

5. (optional) Release is created from `main` branch. Please update `.releaserc.json` with preferred branch name:

```json
{
  "extends": "@rdeak/semantic-release-config",
  "branches": ["main"]
}
```

## Additional configurations

### Release only

```json
{
  "extends": "@rdeak/semantic-release-config/release-only",
  "branches": ["main"]
}
```

It creates just Github release with changelog and tag.

## License

This project is licensed under the terms of the MIT license.
