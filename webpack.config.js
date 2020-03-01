const path = require('path');

module.exports = {
  entry: {index: './index.js'},
  module: {
    rules: [
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};