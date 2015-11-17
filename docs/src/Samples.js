var path = require('path');
var fs = require('fs');

module.exports = {
  breadcrumb: fs.readFileSync(path.join(__dirname, '../../examples/Breadcrumbs.js'), 'utf8')
};
