import React from 'react';
import Badge from '../src/Badge';
import Icon from '../src/Icon';

export default
<div>
  <ul id="dropdown2" className="dropdown-content">
    <li>
      <a href="#!">
        one<Badge>1</Badge>
      </a>
    </li>

    <li>
      <a href="#!">
        two<Badge newIcon>1</Badge>
      </a>
    </li>

    <li>
      <a href="#!">
        three
      </a>
    </li>
  </ul>
  <a className="btn dropdown-button" href="#!" data-activates="dropdown2">
    Dropdown<Icon right>arrow_drop_down</Icon>
  </a>
</div>;
