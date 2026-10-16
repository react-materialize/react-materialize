import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const defaultOptions = {
  indicators: true,
  interval: 6000,
  duration: 500,
  height: 400
};

const Slider = ({
  children,
  className,
  options = defaultOptions,
  fullscreen = false,
  ...props
}) => {
  const _slider = useRef(null);

  useEffect(() => {
    const instance = M.Slider.init(_slider.current, options);

    // On re-init Materialize keeps the slide that is still `.active`, but only
    // marks an indicator when it starts from scratch: mark the current one.
    const indicator = instance.$indicators?.[instance.activeIndex];
    if (indicator) indicator.classList.add('active');

    return () => {
      instance.destroy();
    };
  }, [_slider, options, fullscreen, children]);

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

export default Slider;
