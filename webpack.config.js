var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
      "./src/index.js"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "react-materialize.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {stage: 0}}
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]

};
