import React, { Component } from 'react';
import PropTypes from 'prop-types';

const NavItem = ({
  divider,
  href,
  children,
  ...props
}) => {
  let node;
  if (divider) return <li className='divider' />;
  if (typeof children === 'string') {
    node = <a href={href}>{children}</a>;
  } else {
    node = React.cloneElement(children, { href });
  }
  return (
    <li {...props}>
      {node}
    </li>
  );
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  divider: PropTypes.bool,
  href: PropTypes.string
};

export default NavItem;
