var React = require('react/addons'),
    constants = require('./constants');

var cx = React.addons.classSet;
var Input = React.createClass({
  propTypes: {
    s: React.PropTypes.number,
    m: React.PropTypes.number,
    l: React.PropTypes.number,
    label: React.PropTypes.node,
    type: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      type: 'text'
    };
  },
  render() {
    var classes = {
      col: true,
      'input-field': true
    };
    constants.SIZES.forEach(size => {
      if (this.props[size]) {
        classes[size + this.props[size]] = true;
      }
    });
    var C;
    switch(this.props.type) {
      case 'textarea':
        C = 'textarea';
        break;
      case 'select':
        C = 'select';
        break;
      default:
        C = 'input';
    }
    return (
      <div className={cx(classes)}>
        <C {...this.props} />
        <label>{this.props.label}</label>
      </div>
    );
  }
});

module.exports = Input;
