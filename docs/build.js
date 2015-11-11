var fs = require('fs');
var path = require('path');
var Root = require('./src/Root');
import metadata from './generate-metadata';
metadata().then(propData => {
    Root.propData = propData;
    Root.getPages().forEach(function(fileName) {
        var rootHtml = Root.renderToString({initialPath: fileName});
        fs.writeFileSync(path.join(__dirname, "dist", fileName), rootHtml);
    });
});
