var React = require('react'),
    Navbar = require('../../src/Navbar');

var MainNav = React.createClass({
  render() {
    return (
      <Navbar brand='React Materialize'>
        <li><a href='/get-started.html'>Get started</a></li>
        <li><a href='/components.html'>Components</a></li>
      </Navbar>
    );
  }
});

module.exports = MainNav;
