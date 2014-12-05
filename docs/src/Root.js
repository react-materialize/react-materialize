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
        '<link href="bower_components/materialize/bin/materialize.css" rel="stylesheet" type="text/css" media="screen"/>'
    };
    return (
      <html>
        <head dangerouslySetInnerHTML={header} />
        <body>
          <div id='app'>
          </div>
          <script src='assets/bundle.js' type='text/javascript'/>
        </body>
      </html>
    );
  }
});

module.exports = Root;
