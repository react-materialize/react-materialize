import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class MediaBox extends Component {
  componentDidMount () {
    $('.materialboxed').materialbox();
  }

  render () {
    const { src, className, caption, ...props } = this.props;

    return (
      <img className={cx('materialboxed', className)} data-caption={caption} src={src} {...props} />
    );
  }
}

MediaBox.propTypes = {
  className: PropTypes.string,
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
