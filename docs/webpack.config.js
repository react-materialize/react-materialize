import path from 'path';
import webpack from 'webpack';
import yargs from 'yargs';

const options = yargs
      .alias('p', 'optimize-minimize')
      .alias('d', 'debug')
      .option('port', {
          default: '8080',
          type: 'string'
      })
      .argv;


module.exports = {
    entry: [
      "./client.js"
    ],
    output: {
        publicPath: "http://localhost:8080/assets/",
        filename: "bundle.js",
        path: "/assets"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["transform?brfs", "babel?stage=0"]},
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$|\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[path][name].[ext]' },
        ]
    },
    node: {
      fs: "empty"
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]

};
