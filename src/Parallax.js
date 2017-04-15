import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Parallax extends Component {
  componentDidMount () {
    $('.parallax').parallax();
  }

  render () {
    const { className, imageSrc } = this.props;
    return (
      <div className={cx('parallax-container', className)}>
        <div className='parallax'>
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
  imageSrc: PropTypes.string
};
export default Parallax;
