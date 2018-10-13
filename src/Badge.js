import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Badge = ({ className, newIcon, caption, children, ...props }) => {
  let classes = {
    badge: true,
    new: newIcon
  };

  return (
    <span
      {...props}
      data-badge-caption={caption}
      className={cx(classes, className)}
    >
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
  newIcon: PropTypes.bool,
  /**
   * One can explicitly set the caption in a badge using the caption prop
   */
  caption: PropTypes.string
};

export default Badge;
