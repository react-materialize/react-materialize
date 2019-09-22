import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UserView, UserShape } from './UserView';

const SideNavItem = ({
  divider,
  subheader,
  userView,
  icon,
  href = '#!',
  waves,
  user = {},
  children,
  className,
  onClick,
  ...props
}) => {
  const itemClasses = cx(className, { divider });
  const linkClasses = cx({
    subheader,
    'waves-effect': waves
  });

  return (
    <li className={cx(itemClasses)} {...props}>
      {userView ? (
        <UserView {...user} />
      ) : (
        <a className={linkClasses} href={href} onClick={onClick}>
          {icon}
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
  user: PropTypes.shape(UserShape),
  className: PropTypes.string,
  onClick: PropTypes.func
};

SideNavItem.defaultProps = {
  user: {
    background: '',
    image: '',
    name: '',
    email: ''
  }
};

export default SideNavItem;
