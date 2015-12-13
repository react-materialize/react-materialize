import React from 'react';
import Badge from '../src/Badge';
import Button from '../src/Button';
import Dropdown from '../src/Dropdown';
import Icon from '../src/Icon';
import NavItem from '../src/NavItem';

export default
<Dropdown
  trigger={
    <Button>Dropdown<Icon right>arrow_drop_down</Icon></Button>
  }>
  <NavItem>
    one
    <Badge>1</Badge>
  </NavItem>

  <NavItem>
    two
    <Badge newIcon>1</Badge>
  </NavItem>

  <NavItem>
    three
  </NavItem>
</Dropdown>;
