const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BASE_PATH = path.join(__dirname, '..');

module.exports = {
  context: BASE_PATH,
  entry: ['./src/index'],
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
        loader: 'babel-loader',
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
    modules: [
      path.resolve(BASE_PATH),
      'node_modules/'
    ]
  }
};
