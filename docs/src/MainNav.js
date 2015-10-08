import React from 'react';
import Navbar from '../../src/Navbar';
import NavItem from '../../src/NavItem';

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
