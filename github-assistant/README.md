# GitHub Assistant

[![npm version](https://badge.fury.io/js/github-assistant.svg)](//www.npmjs.com/package/github-assistant)


Scripts to programmatically help with GitHub tasks.

## Install

Install and add to `devDependencies`
```
npm install github-assistant --save-dev
```

## Features

### Creating Releases

Add a [script](https://docs.npmjs.com/cli/run-script) to your `package.json`
```
{
  "scripts": {
    "release:create": "create-release"
  }
}
```

#### Usage
```
Usage: create-release [options]

Options:
  --repo, -r          Name of the repo in the format username/reponame
                                                             [string] [required]
  --tag, -t           Version tag to use for the release     [string] [required]
  --branch, -b        Branch to use for the release          [string] [required]
  --gh-token-env-var  Environment variable name for GitHub access token
                                                  [string] [default: "GH_TOKEN"]
  --gh-api-base-url   Base URL of the GitHub API
                                    [string] [default: "https://api.github.com"]
  --prerelease, -p    Mark as a pre-release           [boolean] [default: false]
  --hide-docs         Omit Documentation section from the release notes
                                                      [boolean] [default: false]
  --dry-run           Skip the creation of the release on GitHub, but do
                      everything else                 [boolean] [default: false]
  --debug, -d         Turn on console messages        [boolean] [default: false]
  --help              Show help                                        [boolean]
  ```
