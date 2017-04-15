<div align="center">
  <h1>crossref-retractions/h1>
  <h2>A very simple CLI and module for getting all CrossRef retractions (and other important article updates)</h2>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/crossref-retractions" alt="NPM package"><img src="https://img.shields.io/npm/v/crossref-cli.svg?style=flat-square" /></a>&nbsp;
  <a href="https://github.com/fathomlabs/crossref-cli/blob/master/LICENSE" alt="MIT license"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" /></a>&nbsp;
  <img src="https://img.shields.io/badge/made_with-❤️💙💚💛💜-e6e6e6.svg?style=flat-square" />
</div>

---

This module is a thin wrapper around [`crossref-cli`](https://github.com/fathomlabs/crossref-cli), that is preconfigured to filter for retractions and other important articles updates (such as expressions-of-concern, withdrawals, etc.).

## installation

for command-line usage:

```js
npm install --global crossref-retractions
```

for use as a node module:

```js
npm install --save crossref-retractions
```

## usage

command-line (does not accept any parameters):

```bash
crossref-retractions > crossref-retractions.json
```

module:

```js
var retractions = require('crossref-retractions')

retractions() // returns the request stream
```
