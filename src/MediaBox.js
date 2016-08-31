import React, { PropTypes } from 'react';

const MediaBox = ({ src, caption, ...props }) =>
  <img className='materialboxed' data-caption={caption} {...props} src={src} />;

MediaBox.propTypes = {
  /**
   * The caption shown below the image when opened
   */
  caption: PropTypes.string,
  /**
   * The path to the image
   */
  src: PropTypes.string.isRequired
};

export default MediaBox;
