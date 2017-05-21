import React from 'react';
import PropTypes from 'prop-types';

const Divider = (props) => (
  <div className='section'>
    {props.children}
  </div>
);

Divider.propTypes = {
  children: PropTypes.node
};

export default Divider;
