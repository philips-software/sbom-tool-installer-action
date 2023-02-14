# Contributions

We accept all ideas, feature requests, documentation fixes, and pull requests. Feel free to reach out via GitHub Issues or GitHub Discussions.

## Development

> First, you'll need to have a reasonably modern version of `node` handy. This won't work with versions older than 9, for instance.

Install the dependencies

```bash
npm install
```

Build the typescript and package it for distribution

```bash
npm run build && npm run package
```

Run the tests :heavy_check_mark:

```bash
npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Releases

This project uses [Release Please](https://github.com/googleapis/release-please) to create releases.
This will automate the release process based on [Conventional Commit messages](https://www.conventionalcommits.org/).

Please make sure to use:
- `fix:` which represents bug fixes, and correlates to a [SemVer](https://semver.org/) patch. 
- `feat:` which represents a new feature, and correlates to a SemVer minor.
- `feat!:`, or `fix!`:, `refactor!`:, etc., which represent a breaking change (indicated by the !) and will result in a SemVer major.

When you want to force a PR with a certain version use [the following instructions](https://github.com/googleapis/release-please#how-do-i-change-the-version-number).

