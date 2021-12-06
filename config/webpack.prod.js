const { merge } = require('webpack-merge');

const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'production',
  target: 'browserslist',

  devtool: false,

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
  },
});
