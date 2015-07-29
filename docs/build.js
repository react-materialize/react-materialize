var fs = require('fs');
var path = require('path');
var nodejsx = require('node-jsx').install({harmony: true});
var Root = require('./src/Root');
Root.getPages().forEach(function(fileName) {
  var rootHtml = Root.renderToString({initialPath: fileName});
  fs.writeFileSync(path.join(__dirname, fileName), rootHtml);
});
