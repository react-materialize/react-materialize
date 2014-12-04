/** @jsx React.DOM */

var React = require('react'),
    BaseMixin = require('./BaseMixin'),
    joinClasses = require('react/lib/joinClasses');

var Button = React.createClass({
  mixins: [BaseMixin],
  propTypes: {
    node: React.PropTypes.node
  },
  render() {
    var C = this.props.node || 'button';
    var classes = this.getClassSet();
    return (
      <C {...this.props}
        className='btn'>
        className={joinClasses(this.props.className, this.cx(classes))}>
      </C>
    );
  },
  renderAnchor(classes) {
    var C = this.props.node || 'a';
    return (
      <C {...this.props}
        href={this.props.href}
        className={joinClasses(this.props.className, this.cx(classes))}>
        {this.props.children}
      </C>
    );
  }
});

module.exports = Button;
