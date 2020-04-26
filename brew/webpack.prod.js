const merge = require('webpack-merge');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/styles/[name].css',
      chunkFilename: '/styles/[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify(''), // Paste here part of Github Pages URL after /
      },
    }),
  ],
});
