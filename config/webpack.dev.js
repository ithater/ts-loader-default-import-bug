const { merge } = require('webpack-merge');

const webpack = require('webpack');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  target: 'web',

  devtool: 'inline-source-map',

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: 5500,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
