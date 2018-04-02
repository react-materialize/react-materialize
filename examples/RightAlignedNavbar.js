import React from 'react';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';

export default
<Navbar brand='logo' right>
  <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>;
