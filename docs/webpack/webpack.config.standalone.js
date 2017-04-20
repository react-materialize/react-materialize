const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const path = require('path');

const baseModuleRules = baseConfig.module.rules;
const baseEntries = baseConfig.entry;
const basePlugins = baseConfig.plugins;
const BASE_PATH = path.join(__dirname, '..');

baseEntries.unshift(
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:3000',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server'
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
);

basePlugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = Object.assign({}, baseConfig, {
  entry: baseEntries,
  module: {
    rules: baseModuleRules.concat([{
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap?convertToAbsoluteUrls'
    }])
  },
  plugins: basePlugins,
  resolve: baseConfig.resolve,
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(BASE_PATH, 'assets'),
    hot: true,
    noInfo: false,
    port: 3000,
    stats: { colors: true }
  },
  devtool: 'eval'
});
