'use strict';

function Hello (options) {
  console.log ('Got options: ' + options);
}

Hello.prototype.apply = function (compiler) {

  compiler.plugin ('compilation', function (compilation) {
    compilation.plugin ('optimize-chunks', function (chunks) {
      console.log ('Compiler context:\n' + compiler.context);
      console.log ('Compiler options:\n', compiler.options);

      //      console.log ('Compilation:\n%O', compilation);
      chunks.forEach (function (chunk) {
        console.log ('Dir is ' + __dirname + ', chunk ' + chunk.name + ', id ' + chunk.id);
        chunk.files.forEach (function (file) {
          console.log ('File ' + file);
        });
        chunk.modules.forEach (function (module) {
          console.log ('Module request ' + module.request);
        });
      });
    });
  });

  compiler.plugin ('emit', function (compilation, cb) {
    console.log ('Emitting Hello!');
    for (var filename in compilation.assets) {
      console.log ('- ' + filename);
    }
    cb ();
  });
  compiler.plugin ('done', function () {
    console.log ('Done: hello :-)');
  });
};

module.exports = Hello;
