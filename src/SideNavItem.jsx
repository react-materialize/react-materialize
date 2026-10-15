import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import UserView, { UserShape } from './UserView';

const SideNavItem = ({
  divider,
  subheader,
  userView,
  icon,
  href = '#!',
  waves,
  user = {},
  children,
  ...props
}) => {
  const itemClasses = { divider };

  const linkClasses = {
    subheader,
    'waves-effect': waves
  };

  return (
    <li className={cx(itemClasses)} {...props}>
      {userView && user && <UserView {...user} />}
      {!userView && (
        <a className={cx(linkClasses)} href={href}>
          {icon && React.cloneElement(icon, { className: 'prefix' })}
          {children}
        </a>
      )}
    </li>
  );
};

SideNavItem.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  subheader: PropTypes.bool,
  userView: PropTypes.bool,
  waves: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  user: PropTypes.shape(UserShape)
};

export default SideNavItem;
