// main.js
'use strict';

import React from 'react'/*this comment disables auto-require of Foo*/;

const Foo = function () {
  return <div/>;
};

const component = <Foo/>;

console.log ('** main.js **');
console.log ('Component.type = ' + component.type);
