'use strict';

var fs = require('fs'),
    path = require('path'),
    nodejsx = require('node-jsx').install(),
    Root = require('./src/Root');

Root.getPages().forEach(function(fileName) {
  var rootHtml = Root.renderToString({initialPath: fileName});
  fs.writeFileSync(path.join(__dirname, fileName), rootHtml);
});
