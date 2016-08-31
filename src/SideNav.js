import React, { PropTypes } from 'react';
import Icon from './Icon';
import idgen from './idgen';

const SideNav = ({ children, id = [`sidenav_${idgen()}`] }) =>
  <nav>
    <ul className='right hide-on-med-and-down'>{children}</ul>
    <ul id={id} className='side-nav'>{children}</ul>
    <a href='#' data-activates={id} className='button-collapse'>
      <Icon>view_headline</Icon>
    </a>
  </nav>;

SideNav.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool
};

export default SideNav;
