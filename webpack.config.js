'use strict';

/* global __dirname */

var path = require ('path');
var Hello = require ('./plugins/hello.js');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'lib/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015!include-components'
      }
    ]
  },
  externals: {
  },
  resolveLoader: {
    modulesDirectories: [
      path.join (__dirname, 'loaders'),
      path.join (__dirname, 'node_modules')
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new Hello ('foo')
  ]
};
