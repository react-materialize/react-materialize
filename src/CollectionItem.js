import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class CollectionItem extends Component {
  render () {
    const {
      active,
      children,
      className,
      href,
      ...other
    } = this.props;

    let classes = {
      'collection-item': true,
      active: active
    };

    if (href) {
      return (
        <a {...other} className={cx(className, classes)} href={href}>
          {children}
        </a>
      );
    }

    return (
      <li {...other} className={cx(className, classes)}>
        {children}
      </li>
    );
  }
}

CollectionItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};

export default CollectionItem;
