'use strict';

// Wallaby.js needs a polyfill for Function.prototype.bind
// see https://github.com/wallabyjs/public/issues/280

if (!Function.prototype.bind) {
  /* jshint freeze:false */
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError ('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var args  = Array.prototype.slice.call (arguments, 1);
    var self  = this;
    var Nop   = function () {};
    var bound = function () {
        return self.apply (this instanceof Nop && oThis ? this : oThis,
          args.concat (Array.prototype.slice.call (arguments)));
      };

    // test this.prototype in case of native functions binding:
    if (this.prototype) {
      Nop.prototype = this.prototype;
    }
    bound.prototype = new Nop ();

    return bound;
  };
}
