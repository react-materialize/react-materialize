import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import idgen from './idgen';

const Carousel = ({
  children,
  className,
  carouselId,
  fixedItem,
  images,
  centerImages,
  options
}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const instance = M.Carousel.init(carouselRef.current, options);

    return () => instance.destroy();
  }, [options]);

  const elemsToRender = children || images || [];

  const classes = cx(
    'carousel',
    {
      'carousel-slider': options.fullWidth
    },
    className
  );

  return (
    <div id={carouselId} ref={carouselRef} className={classes}>
      {Boolean(fixedItem) && (
        <div className="carousel-fixed-item center">{fixedItem}</div>
      )}
      {React.Children.map(elemsToRender, child => {
        const classes = cx('carousel-item', { 'valign-wrapper': centerImages });
        if (typeof child === 'string') {
          return (
            <a className={classes}>
              <img src={child} alt={child} />
            </a>
          );
        }

        return React.cloneElement(child, {
          className: cx(classes, child.props.className)
        });
      })}
    </div>
  );
};

Carousel.propTypes = {
  /**
   * Children to render as carousel elements
   */
  children: PropTypes.any,
  /**
   * Array of image url's
   */
  images: PropTypes.arrayOf(PropTypes.string),
  /**
   * Makes the images centered inside the carousel using '.valign-wrapper' CSS helper
   */
  centerImages: PropTypes.bool,
  /**
   * Fixed element on slider
   */
  fixedItem: PropTypes.node,
  /**
   * Additional classNames for carousel wrapper
   */
  className: PropTypes.string,
  /**
   * Carousel ID for jQuery manipulating
   */
  carouselId: PropTypes.string,
  /**
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
   */
  options: PropTypes.shape({
    /**
     * Transition duration in milliseconds. (Default: 200)
     */
    duration: PropTypes.number,
    /**
     * Perspective zoom. If 0, all items are the same size. (Default: -100)
     */
    dist: PropTypes.number,
    /**
     * Set the spacing of the center item. (Default: 0)
     */
    shift: PropTypes.number,
    /**
     * Set the padding between non center items. (Default: 0)
     */
    padding: PropTypes.number,
    /**
     * Set the number of visible items. (Default: 5)
     */
    numVisible: PropTypes.number,
    /**
     * Make the carousel a full width slider. (Default: false)
     */
    fullWidth: PropTypes.bool,
    /**
     * Set to true to show indicators. (Default: false)
     */
    indicators: PropTypes.bool,
    /**
     * Don't wrap around and cycle through items. (Default: false)
     */
    noWrap: PropTypes.bool,
    /**
     * Callback for when a new slide is cycled to. (Default: null)
     */
    onCycleTo: PropTypes.func
  })
};

Carousel.defaultProps = {
  carouselId: `Carousel-${idgen()}`,
  options: {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    onCycleTo: null
  }
};

export default Carousel;
