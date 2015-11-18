import React from 'react';
import Badge from '../src/Badge';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';

export default
<Navbar brand='logo' right>
  <NavItem href='#!'>sass</NavItem>
  <NavItem href='#!'>
    sass <Badge newIcon>4</Badge>
  </NavItem>
  <NavItem href='#!'>sass</NavItem>
</Navbar>;
