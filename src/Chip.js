import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Chip = ({ children, close, className, ...props }) => {
  return (
    <div className={cx('chip', className)} {...props}>
      {children}
      {close ? <i className="close material-icons">close</i> : null}
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Shows a close icon
   */
  close: PropTypes.bool
};

Chip.defaultProps = {
  close: false
};

export default Chip;
