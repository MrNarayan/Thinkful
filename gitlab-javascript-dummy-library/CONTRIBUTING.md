# Contributing

## Getting started

To begin working on `pipeline-gitlab-javascript-dummy-library`,

1) clone the repo and `cd` into the project directory
```
git clone git@code.corp.indeed.com:pipeline/gitlab-javascript-dummy-library.git
cd gitlab-javascript-dummy-library
```
2) activate the supported version of Node.js
```
nvm use
```
3) fetch and install dependencies
```
npm ci
```

## Build

Build the code to `./dist` with [`cns ts-build`][cns-ts-build]:
```
npm run build
```

See [`tsconfig.build.json`](./tsconfig.build.json) for configuration.

## Quality checks

Run all quality checks:
```
npm run quality
```

### Lint

Lint for style with [`cns ts-lint`]][cns-ts-lint]:
```
npm run lint
```

Automatically fix lint issues where possible:
```
npm run lint-fix
```

See [`tslint.json`](./tslint.json) and [`.prettierrc`](./.prettierrc) for configuration.

### Typecheck

Typecheck with [`cns ts-check`][cns-ts-check]:
```
npm run check
```

See [`tsconfig.json`](./tsconfig.json) for configuration.

### Test

Run the tests with [`cns test`][cns-test]:
```
npm test
```

Watch for changes to the code and rerun the tests:
```
npm run test:watch
```

See [`jest.config.js`](./jest.config.js) for configuration.

## Publishing

This library is published from Jenkins, triggered by a git tag that is a valid semver version
matching the current version in `package.json`. The easiest way to tag a commit for publication is
with [`npm version`][npm-version].

### Initial setup for publishing

See Pipeline's documentation in the wiki for [How to Publish Your Library Using
Pipeline][pipeline-publish]. Penelope will create your builds and `jenkinsfile`s, so you can skip
steps 3 and 4.

### Publishing a release

To publish a release, push a tagged commit to `master`:
```
npm version <major|minor|patch>
git push --tags origin master
```

### Publishing a pre-release

To publish a pre-release, push a tagged commit to a branch other than `master`. You must specify a
pre-release ID to use as the npm [distribution tag][npm-dist-tag]:
```
git checkout jira/PROJECT-123
npm version pre<major|minor|patch> --preid=PROJECT-123
git push --tags origin jira/PROJECT-123
```

You can then install the pre-release in other Node.js projects:
```
npm install @indeed/pipeline-gitlab-javascript-dummy-library@PROJECT-123
```

To update an existing pre-release, push a new tagged commit:
```
git checkout jira/PROJECT-123
npm version prerelease
git push --tags origin jira/PROJECT-123
```

[cns-test]: https://code.corp.indeed.com/node/common-npm-scripts#test
[cns-ts-build]: https://code.corp.indeed.com/node/common-npm-scripts#ts-build
[cns-ts-check]: https://code.corp.indeed.com/node/common-npm-scripts#ts-check
[cns-ts-lint]: https://code.corp.indeed.com/node/common-npm-scripts#ts-lint
[npm-dist-tag]: https://docs.npmjs.com/cli/dist-tag
[npm-version]: https://docs.npmjs.com/cli/version.html
[pipeline-publish]: https://wiki.indeed.com/display/PIPELINE/How+to+publish+your+library+using+pipeline#Howtopublishyourlibraryusingpipeline-Step-by-stepguide
