import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Slider extends Component {
  componentDidMount () {
    const {
      fullscreen,
      indicators,
      interval,
      transition
    } = this.props;

    $('.slider').slider({
      full_width: fullscreen,
      indicators,
      interval,
      transition
    });
  }

  render () {
    const { fullscreen, children, className } = this.props;
    const classes = {
      fullscreen,
      slider: true
    };

    return (
      <div className={cx(classes, className)}>
        <ul className='slides'>{children}</ul>
      </div>
    );
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fullscreen: PropTypes.bool,
  /**
  * Set to false to hide slide indicators
  * @default true
  */
  indicators: PropTypes.bool,
  /**
  * The interval between transitions in ms
  * @default 6000
  */
  interval: PropTypes.number,
  /**
  * The duration of the transation animation in ms
  * @default 500
  */
  transition: PropTypes.number
};

Slider.defaultProps = {
  fullscreen: false,
  indicators: true,
  interval: 6000
};

export default Slider;
