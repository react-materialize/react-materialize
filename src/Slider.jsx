import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Slider = ({ children, className, options, fullscreen, ...props }) => {
  const sliderInstance = useRef(null);
  const _slider = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    sliderInstance.current = M.Slider.init(_slider.current, options);

    return () => {
      if (sliderInstance.current) {
        setActiveIndex(sliderInstance.current.activeIndex);
        sliderInstance.current.destroy();
      }
    };
  }, [_slider, options, fullscreen, children]);

  useEffect(() => {
    if (activeIndex) {
      if (typeof indicators === 'undefined' || options.indicators) {
        sliderInstance.current['$indicators'][activeIndex].className =
          'indicator-item active';
      }
    }
  }, [activeIndex, options.indicators, fullscreen]);

  /**
   * If the slider was not in fullscreen, the height is set as a style attribute
   * on the Slider element. When `.destroy()` is called, this attribute is not
   * removed, resulting in a fullscreen displayed incorrectly.
   */
  useEffect(() => {
    if (fullscreen) {
      _slider.current.removeAttribute('style');
      _slider.current.childNodes[0].removeAttribute('style');
    }
  }, [fullscreen]);

  return (
    <div
      ref={_slider}
      className={cx('slider', className, {
        fullscreen
      })}
      {...props}
    >
      <ul className="slides">{children}</ul>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Whether or not the Slider should be fullscreen
   * @default false
   */
  fullscreen: PropTypes.bool,
  options: PropTypes.shape({
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
  })
};

Slider.defaultProps = {
  fullscreen: false,
  options: {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  }
};

export default Slider;
