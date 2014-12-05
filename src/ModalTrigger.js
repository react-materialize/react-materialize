var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var ModalTrigger = React.createClass({
  propTypes: {
    modal: React.PropTypes.node.isRequired
  },
  render() {
    var classes = {
    };
    return (
      <a className={cx(classes)} onClick={this.leanModal}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = ModalTrigger;
