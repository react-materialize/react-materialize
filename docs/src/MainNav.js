import React from 'react';
import SideNav from '../../src/SideNav';
import MenuItem from '../../src/MenuItem';
import store from './store';

const MainNav = React.createClass({
  getInitialState() {
    return {title: 'Breadcrumb'};
  },

  componentDidMount() {
    store.on('component', this.onChange);
  },

  componentWillUnmount() {
    store.removeListener('component', this.onChange);
  },

  onChange(component) {
    this.state.title = component;
  },

  render() {
    return (
      <header>
        <nav className="top-nav">
          { this.state.title }
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
