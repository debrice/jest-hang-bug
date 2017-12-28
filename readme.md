I use the same jest setting on a regular babel project and I never faced that issue. It seems to be a conflict when both auto mock and coverage collection are active. If you disable one, the test work just fine. This bug is very annoying since every thrown `Error` will just hang the test suite. I've disabled test coverage on my project for now which is fine. I can always trigger coverage manually.

## Install

install dependencies

```
$ yarn
```

then run the test

```
yarn test
```

## Remove the bug

Edit the package.json file, set `collectCoverage` or `automock` to `false` and the bug disappear.


