'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'dist/script.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
