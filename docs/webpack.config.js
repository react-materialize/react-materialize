var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
      "./client.js"
    ],
    output: {
        publicPath: "http://localhost:8080/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["transform?brfs", "babel?stage=0"]},
            { test: /\.json$/, loader: 'json' },
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
