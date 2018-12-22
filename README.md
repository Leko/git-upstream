# git-upstream
[![CircleCI](https://circleci.com/gh/Leko/git-upstream.svg?style=svg)](https://circleci.com/gh/Leko/git-upstream)
![](https://img.shields.io/npm/v/git-upstream.svg)
![](https://img.shields.io/npm/dm/git-upstream.svg)
![](https://img.shields.io/npm/l/git-upstream.svg)

Utility to set the remote "upstream" on forked repository.

## Usage
```
Options:
  --help       Show help                                               [boolean]
  --version    Show version number                                     [boolean]
  --set, -i    Set upstream to a remote               [boolean] [default: false]
  --force, -f  Force overwrite even if upstream already exists
                                                      [boolean] [default: false]
  --token, -t  GitHub access token for private repository               [string]
  --shallow    Prefer parent fork(default) or ancestor fork
                                                       [boolean] [default: true]
  --https      Set https url to remote, otherwise set ssh url
                                                      [boolean] [default: false]

Examples:
  npx git-upstream                     Show upstream url
  npx git-upstream --set               Set upstream with confirmation
  npx git-upstream --set -f            Set upstream even if upstream already
                                       exists
  npx git-upstream --set --https       Set https://...
  npx git-upstream --set --no-shallow  For deep nested fork
```
