var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
      "./client.js"
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["transform?brfs", "babel?stage=0"]}
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]

};
