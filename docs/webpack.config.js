var path = require('path');
var yargs = require('yargs');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

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
    publicPath: options.debug ? webpackDevServerAddr + '/assets/' : '/assets/', //publicPath: '/build'
    filename: 'bundle.js', //filename: '[name].js',
    path: './assets' //path: path.join(__dirname, './build'),
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss']
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
