import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => (
  <div className='section'>
    {props.children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
