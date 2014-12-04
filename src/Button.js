/** @jsx React.DOM */

var React = require('react');

var Button = React.createClass({
  render() {
    return <a className='btn'>{this.props.children}</a>;
  }
});

module.exports = Button;
