import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class Parallax extends Component {
  componentDidMount () {
    const {
      className,
    } = this.props;
    $('.parallax').parallax();
  }

  render () {
    const { className, imageSrc } = this.props;
    return (
      <div className={cx('parallax-container', className)} >
        <div className='parallax'>
          <img src={imageSrc}/>
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
};
export default Parallax;
