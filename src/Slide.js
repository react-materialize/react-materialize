import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ src, children }) => {
  if (typeof src === 'string') {
    return (
      <li>
        <img src={src} alt="" />
        {children}
      </li>
    );
  } else {
    return (
      <li>
        {src}
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
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default Slide;
