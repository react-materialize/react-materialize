import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Slider extends Component {
  constructor() {
    super();
    this.initSlider = this.initSlider.bind(this);
  }

  initSlider() {
    const { indicators, interval, duration, height } = this.props;
    this.instance = M.Slider.init(this._slider, {
      indicators,
      interval,
      duration,
      height
    });
  }

  componentDidMount() {
    this.initSlider();
  }

  componentDidUpdate(prevProps) {
    if (this.instance) {
      this.instance.destroy();
      var activeIndex = this.instance.activeIndex;
      // When instance is destroyed, the style attribute which determines the
      // height of the slider is not removed, making the fullscreen incorrect height
      if (prevProps.fullscreen === false && this.props.fullscreen) {
        this.instance.el.removeAttribute('style');
        this.instance.el.childNodes[0].removeAttribute('style');
      }
      this.initSlider();
      // keep indicator at current index displayed
      if (this.props.indicators && activeIndex)
        this.instance['$indicators'][activeIndex].className =
          'indicator-item active';
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const { fullscreen, children, className } = this.props;
    const classes = {
      fullscreen,
      slider: true
    };

    return (
      <div
        ref={node => (this._slider = node)}
        className={cx(classes, className)}
      >
        <ul className="slides">{children}</ul>
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
  duration: PropTypes.number,
  /**
   * The height of the Slider window
   * @default 400
   */
  height: PropTypes.number
};

Slider.defaultProps = {
  fullscreen: false,
  indicators: true,
  interval: 6000,
  duration: 500,
  height: 400
};

export default Slider;
