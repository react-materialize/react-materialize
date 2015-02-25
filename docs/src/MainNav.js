var React = require('react'),
    Navbar = require('../../src/Navbar');
    NavItem = require('../../src/NavItem');

var MainNav = React.createClass({
  render() {
    return (
      <Navbar brand='React Materialize' right>
        <NavItem href='/get-started.html'>Get started</NavItem>
        <NavItem href='/components.html'>Components</NavItem>
      </Navbar>
    );
  }
});

module.exports = MainNav;
