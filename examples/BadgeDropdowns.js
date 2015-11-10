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
        two<Badge new={true}>1</Badge>
      </a>
    </li>

    <li>
      <a href="#!">
        three
      </a>
    </li>
  </ul>
  <a class="btn dropdown-button" href="#!" data-activates="dropdown2">
    Dropdown<Icon right>mdi-navigation-arrow-drop-down</Icon>
  </a>
</div>;