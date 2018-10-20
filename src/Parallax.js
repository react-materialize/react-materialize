import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Parallax extends Component {
  componentDidMount() {
    if (typeof M !== 'undefined') {
      const { options } = this.props;
      this.instance = M.Parallax.init(this._parallax, options);
    }
  }

  componentWillUnmount() {
    this.instance && this.instance.destroy();
  }

  render() {
    const { className, imageSrc } = this.props;
    return (
      <div className={cx('parallax-container', className)}>
        <div
          className="parallax"
          ref={div => {
            this._parallax = div;
          }}
        >
          <img src={imageSrc} />
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  className: PropTypes.string,
  /**
   * The image path which will be used for the background of the parallax
   */
  imageSrc: PropTypes.string,
  options: {
    /**
     * The minimum width of the screen, in pixels, where the parallax functionality starts working.
     */
    responsiveThreshold: PropTypes.number
  }
};

Parallax.defaultProps = {
  options: {
    responsiveThreshold: 0
  }
};

export default Parallax;
