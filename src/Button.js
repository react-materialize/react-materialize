/** @jsx React.DOM */

var React = require('react'),
    cx = React.addons.classSet,
    BaseMixin = require('./BaseMixin'),
    joinClasses = require('react/lib/joinClasses');

var Button = React.createClass({
  propTypes: {
    node: React.PropTypes.node,
    effect: React.PropTypes.bool,
    disabled: React.PropTypes.bool
  },
  render() {
    var C = this.props.node || 'button';
    var classes = {btn: true};
    if (this.props.effect) {
      classes['waves-effect'] = true;
      classes['waves-light'] = true;
    }
    return (
      <C {...this.props} className={cx(classes)}>
        {this.props.children}
      </C>
    );
  },
  renderAnchor(classes) {
    var C = this.props.node || 'a';
    var href = this.props.href || '#';
    return (
      <C {...this.props}
        href={href}
        className={cx(classes)}>
        {this.props.children}
      </C>
    );
  }
});

module.exports = Button;
