'use strict';

function requireAll (r) {
  r.keys ().forEach (function (k) {
    r (k);
  });
}

requireAll (require.context ('./components/', true, /\.js$/));

console.log ('Require done.');
