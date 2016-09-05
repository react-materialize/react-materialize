import React, { PropTypes } from 'react';
import cx from 'classnames';

const Badge = ({ className, newIcon, children, ...props }) => {
  let classes = {
    badge: true,
    'new': newIcon
  };
  return (
    <span {...props} className={cx(classes, className)}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Add the <b>new</b> class name
   */
  newIcon: PropTypes.bool
};

export default Badge;
