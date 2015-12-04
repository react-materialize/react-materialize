import React from 'react';
import cx from 'classnames';

// This should be used within any component that has a menu like interface
class MenuItem extends React.Component {
  render() {
    let {href, breadcrumbItem, children, className, ...props} = this.props;
    let classes = {
      breadcrumb: breadcrumbItem,
    };
    return (
      <a href={href} {...props} className={cx(classes, className)}>{children}</a>
    );
  }
}

MenuItem.propTypes = {
  // internal
  breadcrumbItem: React.PropTypes.bool,
  /**
   * The link for the anchor
   */
  href: React.PropTypes.string,
};

export default MenuItem;
