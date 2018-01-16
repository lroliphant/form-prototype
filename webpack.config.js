var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  entry: ['./assets/js/index.js', './assets/styles/main.scss'],

  output: {
    filename: 'dist/bundle.js'
  },

  module: {
    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
