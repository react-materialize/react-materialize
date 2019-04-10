import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class MediaBox extends Component {
  componentDidMount() {
    if (typeof M !== 'undefined') {
      const { options } = this.props;

      this.instance = M.Materialbox.init(this._materialBoxed, options);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const { src, className, caption, ...props } = this.props;

    delete props.options;

    return (
      <img
        className={cx('materialboxed', className)}
        data-caption={caption}
        src={src}
        ref={img => {
          this._materialBoxed = img;
        }}
        {...props}
      />
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
  src: PropTypes.string.isRequired,
  options: PropTypes.shape({
    /**
     * Transition in duration in milliseconds.
     */
    inDuration: PropTypes.number,
    /**
     * Transition out duration in milliseconds.
     */
    outDuration: PropTypes.number,
    /**
     * Callback function called before materialbox is opened.
     */
    onOpenStart: PropTypes.func,
    /**
     * Callback function called after materialbox is opened.
     */
    onOpenEnd: PropTypes.func,
    /**
     * Callback function called before materialbox is closed.
     */
    onCloseStart: PropTypes.func,
    /**
     * Callback function called after materialbox is closed.
     */
    onCloseEnd: PropTypes.func
  })
};

MediaBox.defaultProps = {
  options: {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};

export default MediaBox;
