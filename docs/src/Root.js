var React = require('react'),
    Router = require('react-router');

var Root = React.createClass({
  statics: {
    getPages: function() {
      return [
        'index.html',
        'get-started.html',
        'components.html'
      ];
    },
    renderToString: function(props) {
      return "<!doctype html>" +
        React.renderToString(<Root {...props} />);
    }
  },
  render: function() {
    var header = {
      __html: '<title>React Materialize</title>' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
        '<link href="node_modules/materialize-css/bin/materialize.css" rel="stylesheet" type="text/css" media="screen"/>' +
        '<link href="assets/docs.css" rel="stylesheet" type="text/css" media="screen"/>' +
        '<link href="node_modules/prismjs/themes/prism.css" rel="stylesheet" type="text/css" media="screen"/>' +
        '<script src="node_modules/jquery/dist/jquery.js"></script>' +
        '<script src="node_modules/materialize-css/bin/materialize.js"></script>' +
        '<script src="node_modules/prismjs/prism.js"></script>'
    };
    return (
      <html>
        <head dangerouslySetInnerHTML={header} />
        <body>
        </body>
        <script src="assets/bundle.js" type="text/javascript"/>
      </html>
    );
  }
});

module.exports = Root;
