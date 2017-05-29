import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ children, close }) => {
  return (
    <div className='chip'>
      {children}
      {close ? <i className='close material-icons'>close</i> : null}
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
  /**
   * If show a close icon
   * @default false
   */
  close: PropTypes.bool
};

export default Chip;
