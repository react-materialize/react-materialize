import React from 'react';
import Navbar from '../src/Navbar';
import NavItem from '../src/NavItem';
import Icon from '../src/Icon';

export default
<Navbar brand='logo' right>
  <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
</Navbar>;
