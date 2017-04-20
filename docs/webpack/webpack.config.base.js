require('dotenv').load({ silent: true });
const HtmlWebpackPlugin = require('html-webpack-plugin');
// TODO continue here

const path = require('path');

const BASE_PATH = path.join(__dirname, '..');

const svgoConfig = JSON.stringify({
  plugins: [
    { removeTitle: true }
  ]
});

module.exports = {
  context: BASE_PATH,
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.join(BASE_PATH, 'public'),
    filename: 'application.js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(BASE_PATH, 'config.my.js'),
          path.resolve(BASE_PATH, 'config.standalone.js'),
          path.resolve(BASE_PATH, 'src'),
          // This module is published as ES2015 and must be transpiled
          path.resolve(BASE_PATH, 'node_modules/camelcase-keys')
        ]
      },
      {
        test: /\.gif|\.jpg|\.png$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader?name=[path][hash].[ext]'
      },
      {
        test: /\.svg$/,
        use: [
          'url-loader',
          'svgo-loader?' + svgoConfig
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(BASE_PATH),
      'node_modules'
    ],
    extensions: ['.js', '.json']
  }
};
