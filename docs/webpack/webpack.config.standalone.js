const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const BASE_PATH = path.join(__dirname, '..');
const baseModuleRules = baseConfig.module.rules;
const baseEntries = baseConfig.entry;
baseEntries.unshift(
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:8080',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server'
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
);

module.exports = Object.assign({}, baseConfig, {
  entry: baseEntries,
  module: {
    rules: baseModuleRules.concat([{
      test: /\.scss$/,
      loader: 'style-loader!css-loader?sourceMap?convertToAbsoluteUrls!sass-loader?sourceMap'
    }])
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.NamedModulesPlugin()
  ],
  resolve: Object.assign({}, baseConfig.resolve, {
    alias: {
      config: path.join(BASE_PATH, 'config.standalone.js')
    }
  }),
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    noInfo: false,
    stats: { colors: true },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: 'inline-source-map'
});
