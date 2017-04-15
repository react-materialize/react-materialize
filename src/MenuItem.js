import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// This should be used within any component that has a menu like interface
class MenuItem extends Component {
  render () {
    const { href, breadcrumbItem, children, className, ...props } = this.props;
    let classes = {
      breadcrumb: breadcrumbItem
    };
    return (
      <a href={href} {...props} className={cx(classes, className)}>{children}</a>
    );
  }
}

MenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  // internal
  breadcrumbItem: PropTypes.bool,
  /**
   * The link for the anchor
   */
  href: PropTypes.string
};

export default MenuItem;
