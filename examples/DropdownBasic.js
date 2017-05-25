import React from 'react';
import Button from '../src/Button';
import Dropdown from '../src/Dropdown';
import NavItem from '../src/NavItem';

export default
<Dropdown trigger={
    <Button>Drop me!</Button>
  }>
  <NavItem>one</NavItem>
  <NavItem>two</NavItem>
  <NavItem divider />
  <NavItem>three</NavItem>
</Dropdown>;
