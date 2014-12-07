var React = require('react'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var NavItem = React.createClass({
  propTypes: {
    href: React.PropTypes.string
  },
  render() {
    var {href, children, ...props} = this.props;
    return (
      <li {...props}>
        <a href={href}>{children}</a>
      </li>
    );
  }
});

module.exports = NavItem;
