import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ divider, ...props }) => {
  if (divider) return <li className="divider" />;
  return <a {...props} />;
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
