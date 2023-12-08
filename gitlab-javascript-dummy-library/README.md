# gitlab-javascript-dummy-library

## Table of Contents

*  [Install](#install)
*  [Usage](#usage)
    *  [ES6 Module](#es6-module)
    *  [CommonJS](#commonjs)
*  [Releases](#releases)
*  [Contributing](#contributing)
*  [About this project](#about-this-project)

## Install

```
npm i @indeed/pipeline-gitlab-javascript-dummy-library
```

## Standard Entrypoint Information
You can use [standard entrypoints](https://wiki.indeed.com/x/HxyfF) to easily configure and test the library

### Setup
Use this to setup & install dependencies
```bash
$ indeed-entrypoint setup
```
### Build
Use this to build a production deployable
```bash
$ indeed-entrypoint build
```
### Testing
Use this to run all unit tests for the library.
```bash
$ indeed-entrypoint unitTest
```
Use this to run all integration test for the library, if any are added.
There are currently no integration tests, please update `.indeed/runNpm.sh` when integration tests are added. 
```bash
$ indeed-entrypoint integrationTest
```
### Updating Dependencies
This will update any dependencies. Typically, just minor/patch version
```bash
$ indeed-entrypoint updateDependencies
```

## Usage

### ES6 Module

```
import { gitlabJavascriptDummyLibrary } from '@indeed/pipeline-gitlab-javascript-dummy-library';

(async () => {
    console.log(await gitlabJavascriptDummyLibrary('Jobby')); // prints Hello, Jobby
})();
```

### CommonJS

```
const { gitlabJavascriptDummyLibrary } = require('@indeed/pipeline-gitlab-javascript-dummy-library');

(async () => {
    console.log(await gitlabJavascriptDummyLibrary('Jobby')); // prints Hello, Jobby
})();
```
## Enable Dependency Updating

gitlab-javascript-dummy-library is set up to receive automatic MRs from [the NPM Dependency Updater](https://wiki.indeed.com/x/7ZSRDQ). Whenever an npm dependency has a new major, minor, or patch version, the NPM Dependency Updater opens a merge request for your repo. To opt-in to get automatic updates to your npm dependencies, just add `@fereports` as a Developer to your new project. If you do not want to receive updates, please delete `renovate.json`.


## Releases

See [CHANGELOG.md](./CHANGELOG.md) for details.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## About this project

This project was created using the "NodeJS Library" project type in [Penelope][], which is based on
current Indeed best practices for [building high-quality Node.js libraries][node-library-quality].
The skeleton is maintained by the [Node.js Guild][]. For support, please reach out in [#nodejs][] or
file a [NODE][] ticket.

[Node.js Guild]: https://wiki.indeed.com/pages/viewpage.action?spaceKey=Guilds&title=Node.js+Guild
[NODE]: https://bugs.indeed.com/projects/NODE
[#nodejs]: https://indeed.slack.com/messages/C4M0K4732
[node-library-quality]: https://wiki.indeed.com/display/NodeJS/Quality+of+Node.js+packages
[penelope]: https://penelope.sandbox.qa.indeed.net/
