var path = require('path');
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
      { test: /\.js$/, exclude: /node_modules|Samples.js/, loader: 'babel?cacheDirectory', presets: ['es2015', 'react', 'stage-0'] },
      { test: /Samples.js/, loader: `transform/cacheable?brfs!babel` },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$|\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[path][name].[ext]' },
    ]
  },
  node: {
    fs: 'empty'
  }
};
