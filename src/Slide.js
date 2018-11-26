import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ image, children }) => {
  if (typeof image === 'string') {
    return (
      <li>
        <img src={image} alt="" />
        {children}
      </li>
    );
  } else {
    return (
      <li>
        {image}
        {children}
      </li>
    );
  }
};

Slide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * The path of the background image
   */
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default Slide;
