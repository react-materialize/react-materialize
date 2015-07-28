var React = require('react/addons'),
    joinClasses = require('react/lib/joinClasses');

var cx = React.addons.classSet;
var CollectionItem = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    href: React.PropTypes.string
  },
  render() {
    var classes = {
      'collection-item': true,
      active: this.props.active
    };
    var C = this.isAnchor() ? 'a' : 'li';
    return (
      <C className={cx(classes)}>
        {this.props.children}
      </C>
    );
  },
  isAnchor() {
    return this.props.href !== null;
  }
});

module.exports = CollectionItem;
