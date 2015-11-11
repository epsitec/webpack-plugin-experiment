// loader.Spec.js
'use strict';

// The include-components loader detects the import of React
// below and therefore looks for a reference to component Foo.
import React from 'react';

console.log ('** loader.Spec.js **');

// Since the loader finds this reference to component Foo, it
// inserts an import for ../components/Foo.js above, and this
// works:
const component = <Foo/>;

console.log ('Component.type = ' + component.type);

// Another test of the include-components loader: if it finds
// the string ZORG in the source, it defines a constant named
// Zorg at the start of the file. Removing this comment will
// also remove the definition of Zorg.
console.log ('ZORG says ' + Zorg);
