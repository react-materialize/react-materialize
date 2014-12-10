var React = require('react'),
    reactTools = require('react-tools'),
    Row = require('../../src/Row'),
    Col = require('../../src/Col'),
    Button = require('../../src/Button'),
    Icon = require('../../src/Icon'),
    Navbar = require('../../src/Navbar'),
    NavItem = require('../../src/NavItem'),
    Card = require('../../src/Card'),
    CardTitle = require('../../src/CardTitle'),
    Preloader = require('../../src/Preloader'),
    Collection = require('../../src/Collection'),
    CollectionItem = require('../../src/CollectionItem'),
    Collapsible = require('../../src/Collapsible'),
    CollapsibleItem = require('../../src/CollapsibleItem'),
    Toast = require('../../src/Toast'),
    OverlayTrigger = require('../../src/OverlayTrigger'),
    Modal = require('../../src/Modal'),
    ModalTrigger = require('../../src/ModalTrigger');


var ReactPlayground = React.createClass({
  propTypes: {
    code: React.PropTypes.string.isRequired
  },

  componentDidMount() {
    /* jshint ignore:start */
    eval(reactTools.transform(this.props.code));
    /* jshint ignore:end */
    React.render(example, this.refs.mount.getDOMNode());
  },

  render() {
    var {name, code, ...props} = this.props;
    return (
      <div className='playground'>
        <div ref='mount' />
        <pre><code className='language-markup'>
          {this.props.code}
        </code></pre>
      </div>
    );
  }
});

module.exports = ReactPlayground;
