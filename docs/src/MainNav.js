import React from 'react';
import SideNav from '../../src/SideNav';
import MenuItem from '../../src/MenuItem';

let capitalize = s => {
  let s1 = s.split('.')[0];
  return s1.charAt(0).toUpperCase() + s1.substr(1);
};

const MainNav = React.createClass({
  propTypes: {
    component: React.PropTypes.string
  },

  render() {
    let { component } = this.props;
    return (
      <header>
        <nav className="top-nav">
          { capitalize(component) }
        </nav>
        <SideNav>
          <MenuItem href='/get-started.html'>Get started</MenuItem>
          <MenuItem href='/components.html'>Components</MenuItem>
        </SideNav>
      </header>
    );
  }
});

module.exports = MainNav;
