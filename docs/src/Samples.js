var path = require('path');
var fs = require('fs');

export default {
  breadcrumb: fs.readFileSync(path.join(__dirname, '../../examples/Breadcrumbs.js'), 'utf8')
};
