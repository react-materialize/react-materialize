var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var CollectionItem = React.createClass({
  propTypes: {
    active: React.PropTypes.bool
  },
  render() {
    var classes = {
      'collection-item': true,
      active: this.props.active
    };
    return (
      <li className={cx(classes)}>
        {this.props.children}
      </li>
    );
  }
});

module.exports = CollectionItem;
