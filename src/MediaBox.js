import React from 'react';

// Material design implementation of the Lightbox plugin
class MediaBox extends React.Component {
  render() {
    let {src, caption,  ...props} = this.props;
    return (
      <img className="materialboxed" data-caption={caption} {...props} src={src} />
    );
  }
}

MediaBox.propTypes = {
  /**
   * The caption shown below the image when opened
   */
  caption: React.PropTypes.string,
  /**
   * The path to the image
   */
  src: React.PropTypes.string.isRequired
};

export default MediaBox;
