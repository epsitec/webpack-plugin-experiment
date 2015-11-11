'use strict';

// See https://webpack.github.io/docs/how-to-write-a-loader.html

function IncludeComponents (content) {

  var lines = content.split ('\n');

  var pos = -1;

  lines.forEach (function (line, index) {
    console.log (index + ': ' + line);
    if ((line.indexOf ('import ') === 0) &&
        (line.indexOf ('\'react\';') !== -1)) {
      pos = index;
    }
  });

  if (pos !== -1) {
    console.log ('Found import react at line ' + pos);
    if (content.indexOf ('<Foo') >= 0) {
      lines[pos] = lines[pos] + 'const Foo = require ("../components/Foo.js");';
      console.log ('Injected require for component Foo:');
      console.log (lines[pos]);
    }
  }

  if (content.indexOf ('ZORG') !== -1) {
    console.log ('Added Zorg constant');
    lines[0] = 'const Zorg = "Ha!";' + lines[0];
  }

  return lines.join ('\n');
}

module.exports = IncludeComponents;
