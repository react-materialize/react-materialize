var React = require('react');
var Navbar = require('../../src/Navbar');
var NavItem = require('../../src/NavItem');

var MainNav = React.createClass({
  render() {
    return (
      <header>
        <Navbar brand='React Materialize' right>
          <NavItem href='/get-started.html'>Get started</NavItem>
          <NavItem href='/components.html'>Components</NavItem>
        </Navbar>
      </header>
    );
  }
});

module.exports = MainNav;
