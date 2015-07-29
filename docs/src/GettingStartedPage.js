var React = require('react'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col');

var GettingStartedPage = React.createClass({
  render() {
    var shims = '<!--[if lt IE 9]>\n' +
        '<script>\n' +
        '  (function(){\n' +
        '    var ef = function(){};\n' +
        '    window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};\n' +
        '  }());\n' +
        '</script>\n' +
        '<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>\n' +
        '<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>\n' +
        '<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>\n' +
        '<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>\n' +
        '<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>\n' +
      '<![endif]-->\n';
    return (
      <Row>
        <Col s={12}>
          <h4>Set Up</h4>
          <pre>
            <code className='language-markup'>
              $ npm install react-materializecss
            </code>
          </pre>
        </Col>
        <Col s={12}>
          <h4>Browser Support</h4>
          <pre>
            <code className='language-markup'>
              {shims}
            </code>
          </pre>
        </Col>
      </Row>
    );
  }
});

module.exports = GettingStartedPage;
