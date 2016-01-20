const path = require('path');
const yargs = require('yargs');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const options = yargs
  .alias('d', 'debug')
  .option('port', {
    default: '8080',
    type: 'string'
  })
  .argv;

const webpackDevServerAddr = 'http://localhost:' + options.port;

const config = {
  entry: [
    './client.js'
  ],
  output: {
    publicPath: options.debug ? webpackDevServerAddr + '/assets/' : '/assets/', //publicPath: '/build'
    // filename: 'bundle.js', //filename: '[name].js',
    filename: '[name].js',
    // path: './assets' //path: path.join(__dirname, './build'),
    path: path.join(__dirname, './build'),
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
      {
        test: /\.js$/,
        exclude: /node_modules|Samples.js/,
        loader: 'babel?cacheDirectory', presets: ['es2015', 'react', 'stage-0']
      },
      { test: /Samples.js/, loader: `transform/cacheable?brfs!babel` },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$|\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))}
    ]
  },
  node: {
    fs: 'empty'
  }
};

module.exports = config
