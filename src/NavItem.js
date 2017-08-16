import React from 'react';
import PropTypes from 'prop-types';

const renderChildren = (children, href = '') => {
  if (React.Children.count(children) === 1 && typeof children === 'string') {
    return <a href={href}>{children}</a>;
  } else {
    return React.Children.map(children, (child) =>
      React.cloneElement(child)
    );
  }
};

const NavItem = ({
  divider,
  href,
  children,
  ...props
}) => {
  if (divider) return <li className='divider' />;
  return (
    <li {...props}>
      {renderChildren(children, href)}
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
