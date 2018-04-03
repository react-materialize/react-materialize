import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ divider, children, href = '', onClick, ...props }) => {
  if (divider) return <li className="divider" />;
  const a = onClick ? (
    <a onClick={onClick}>{children}</a>
  ) : (
    <a href={href}>{children}</a>
  );
  return <li {...props}>{a}</li>;
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  divider: PropTypes.bool,
  href: PropTypes.string,
  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: PropTypes.func
};

export default NavItem;
