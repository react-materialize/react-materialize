import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UserView, UserShape } from './UserView';

class SideNavItem extends Component {
  render() {
    const {
      divider,
      subheader,
      userView,
      icon,
      href = '#!',
      waves,
      user = {},
      children,
      ...props
    } = this.props;
    const itemClasses = {
      divider: divider
    };
    const linkClasses = {
      subheader: subheader,
      'waves-effect': waves
    };

    return (
      <li className={cx(itemClasses)} {...props}>
        {userView && user && <UserView {...user} />}
        {!userView && (
          <a className={cx(linkClasses)} href={href}>
            {icon && <i className="material-icons">{icon}</i>}
            {children}
          </a>
        )}
      </li>
    );
  }
}

SideNavItem.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  subheader: PropTypes.bool,
  userView: PropTypes.bool,
  waves: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  user: PropTypes.shape(UserShape)
};

export default SideNavItem;
