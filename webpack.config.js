import ExtractTextPlugin from "extract-text-webpack-plugin";

var path = require('path');
var DIST_DIR = path.join(__dirname, "dist"),
SRC_DIR = path.join(__dirname, "src");

module.exports = {
  context: SRC_DIR,

  entry: './assets/js/index',

  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "sass-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};
