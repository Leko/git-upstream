# git-upstream
[![CircleCI](https://circleci.com/gh/Leko/git-upstream.svg?style=svg)](https://circleci.com/gh/Leko/git-upstream) [![Greenkeeper badge](https://badges.greenkeeper.io/Leko/git-upstream.svg)](https://greenkeeper.io/)
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


## Contribution

1. Fork this repository
1. Write your code
1. Run tests
1. Create pull request to master branch

## Development

```
git clone git@github.com:Leko/git-upstream.git
cd git-upstream
npm i
```

## License

This package under [MIT](https://opensource.org/licenses/MIT) license.
