import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {
  render () {
    const { divider, href, children, ...props } = this.props;
    if (divider) {
      return <li className='divider' />;
    } else {
      return (
        <li {...props}>
          <a href={href}>{children}</a>
        </li>
      );
    }
  }
}

NavItem.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  href: PropTypes.string
};

export default NavItem;
