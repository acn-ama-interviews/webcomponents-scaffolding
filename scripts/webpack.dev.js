const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: dist,
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 1
    }
  },
  devtool: 'cheap-module-eval-source-map'
});
