import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CollectionItem = ({ children, className, href, ...other }) => {
  let item = (
    <li {...other} className={cx('collection-item', className)}>
      {children}
    </li>
  );

  if (href) {
    item = (
      <a {...other} href={href} className={cx('collection-item', className)}>
        {children}
      </a>
    );
  }

  return item;
};

CollectionItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /* 
   * Default: false
   * For more information refer to : https://materializecss.com/collections.html#links 
   */
  href: PropTypes.string
};

export default CollectionItem;
