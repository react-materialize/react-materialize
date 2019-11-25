import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Slider = ({ children, className, options, fullscreen, ...props }) => {
  const _slider = useRef(null);

  useEffect(() => {
    const instance = M.Slider.init(_slider.current, options);

    return () => {
      instance.current && instance.current.destroy();
    };
  }, [_slider, options]);

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
