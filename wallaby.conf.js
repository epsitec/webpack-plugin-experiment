// Wallaby.js configuration

'use strict';

var wallabyWebpack = require ('wallaby-webpack');
var webpackConfig = require ('./webpack.config');
var wallabyPostprocessor = wallabyWebpack (webpackConfig);

module.exports = function (wallaby) {
  return {
    // set `load: false` to all source files and tests processed by webpack
    // (except external files),
    // as they should not be loaded in browser,
    // their wrapped versions will be loaded instead
    files: [
      // {pattern: 'lib/jquery.js', instrument: false},
      {pattern: 'components/**/*.js', load: false},
      {pattern: 'src/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js', load: false}
    ],

    postprocessor: wallabyPostprocessor,

    bootstrap: function () {
      // required to trigger test loading
      window.__moduleBundler.loadTests ();
    }
  };
};
