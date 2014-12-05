var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Collapsible = React.createClass({
  propTypes: {
    accordion: React.PropTypes.bool.isRequired
  },
  getDefaultProps() {
    return {accordion: true};
  },
  render() {
    var classes = {
      collapsible: true,
      accordion: this.props.accordion
    };
    return (
      <ul className={cx(classes)}>
        {this.props.children}
      </ul>
    );
  }
});
