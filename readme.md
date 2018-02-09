# antivirus
scan files for evil code

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/antivirus)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/antivirus)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/antivirus)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/antivirus/)

## Status for master
[![build status](https://GitLab.com/pushrocks/antivirus/badges/master/build.svg)](https://GitLab.com/pushrocks/antivirus/commits/master)
[![coverage report](https://GitLab.com/pushrocks/antivirus/badges/master/coverage.svg)](https://GitLab.com/pushrocks/antivirus/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/antivirus.svg)](https://www.npmjs.com/package/antivirus)
[![Dependency Status](https://david-dm.org/pushrocks/antivirus.svg)](https://david-dm.org/pushrocks/antivirus)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/antivirus/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/antivirus/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/antivirus/badges/code.svg)](https://www.bithound.io/github/pushrocks/antivirus)
[![Known Vulnerabilities](https://snyk.io/test/npm/antivirus/badge.svg)](https://snyk.io/test/npm/antivirus)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

This package is determined for use in environments that need virus scanning of some sort.

```typescript
import * as antivirus from 'antivirus'

const scanAFile = async (pathToFileArg) => {
  let scanresult = await antivirus.scanFile(pathToFileArg)
  if(scanresult.isClean) {
    // do something if its clean
  } else {
    // do something if its infected
  }
}
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
