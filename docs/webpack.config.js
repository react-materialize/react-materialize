const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const BASE_PATH = path.resolve(__dirname);
const PORT = 3000;

const common = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(BASE_PATH, 'assets'),
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'cache-loader!babel-loader?cacheDirectory=true',
        exclude: /node_modules/
      },
      {
        test: /\.gif|\.jpg|\.png$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader'
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
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
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
  devtool: 'eval'
};

const devConfig = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server'
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            singleton: true
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            convertToAbsoluteUrls: true
          }
        }
      ]
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
};

const prodConfig = {
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};

const statsConfig = {
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' })
  ]
};

const configs = {
  start: merge(devConfig, common),
  stats: merge(prodConfig, statsConfig, common),
  build: merge(prodConfig, common)
};

module.exports = configs[TARGET];
