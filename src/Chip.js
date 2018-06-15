import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ children, close, ...props }) => {
  return (
    <div className="chip" {...props}>
      {children}
      {close ? <i className="close material-icons">close</i> : null}
    </div>
  );
};

Chip.propTypes = {
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
