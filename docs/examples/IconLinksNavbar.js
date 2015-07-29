import React from 'react';
import Navbar from '../../src/Navbar';
import NavItem from '../../src/NavItem';
import Icon from '../../src/Icon';

export default
<Navbar brand='logo' right>
  <NavItem href='get-started.html'><Icon mdi='action-search'/></NavItem>
  <NavItem href='get-started.html'><Icon mdi='action-view-module'/></NavItem>
  <NavItem href='get-started.html'><Icon mdi='navigation-refresh'/></NavItem>
  <NavItem href='get-started.html'><Icon mdi='navigation-more-vert'/></NavItem>
</Navbar>;
