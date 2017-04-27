const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const BASE_PATH = path.resolve(__dirname);
const PORT = 3000;

const common = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(BASE_PATH, 'assets'),
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/
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
        use: [ 'url-loader', 'svgo-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ],
  externals: {
    jquery: 'jQuery',
    Materialize: 'Materialize'
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, '../src'),
      'node_modules'
    ]
  },
  devtool: 'cheap-module-source-map'
};

if (TARGET === 'start') {
  module.exports = merge({
    entry: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${PORT}`,
      'webpack/hot/only-dev-server'
    ],
    module: {
      rules: [{
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap?convertToAbsoluteUrls'
      }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
      contentBase: path.resolve(BASE_PATH, 'assets'),
      historyApiFallback: true,
      hot: true,
      inline: true,
      port: PORT,
      stats: { colors: true }
    }
  }, common);
} else {
  module.exports = merge({
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin('application.css')
    ]
  }, common);
}
