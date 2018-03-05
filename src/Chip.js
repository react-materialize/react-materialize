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
  close: PropTypes.bool
};

Chip.defaultProps = {
  close: false
};

export default Chip;
