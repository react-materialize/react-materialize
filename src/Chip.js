import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

const Chip = ({ children, close, className, ...props }) => (
  <div className={cx('chip', className)} {...props}>
    {children}
    {close && <Icon>close</Icon>}
  </div>
);

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
