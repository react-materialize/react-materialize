var path = require('path');
var webpack = require('webpack');
var yargs = require('yargs');

var options = yargs
      .alias('d', 'debug')
      .option('port', {
        default: '8080',
        type: 'string'
      })
      .argv;

var webpackDevServerAddr = 'http://localhost:' + options.port;

module.exports = {
  entry: [
    './client.js'
  ],
  output: {
    publicPath: options.debug ? webpackDevServerAddr + '/assets/' : '/assets/',
    filename: 'bundle.js',
    path: './assets'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules|ComponentsPage.js/, loader: 'babel?cacheDirectory', presets: ['es2015', 'react', 'stage-0'] },
      //{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015&presets[]=react&presets[]=stage-0', 'transform?brfs'] },
      //{ test: /Samples.js|ComponentPage/, loader: `transform?brfs!babel` },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$|\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[path][name].[ext]' },
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
