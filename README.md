# Webpack plugin experiment

This project is used to experiment with Webpack and try to find out how loaders
and plugins work.

## What is going on?

An experimental _loader plugin_ named `include-components` is provided, which
recognizes the use of component `<Foo/>` and, if the source file contains this
exact import:

```js
import React from 'react';
```

it injects this just after the import of React:

```js
const Foo = require ("../components/Foo.js");
```

## How do I try it out?

To try this out:

```
npm install
npm install webpack -g
webpack -d
node ./lib/bundle.js
```

## Issues

* Mocha does not work; this is expected, since the provided `mocha.opts` do not
  take in account the custom Webpack loader plugin. Therefore, any reference to
  `<Foo/>` will fail.
* Wallaby.js stops with a mysterious message.

Wallaby.js fails with the following error message:
> TypeError: 'undefined' is not a function (evaluating 'RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/)')
