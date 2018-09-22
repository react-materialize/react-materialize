import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.renderFixedItem = this.renderFixedItem.bind(this);
  }

  componentDidMount() {
    const { options = {} } = this.props;

    if (typeof window.$ !== 'undefined') {
      window.$(this._carousel).carousel(options);
    } else if (typeof window.M !== 'undefined') {
      this.instance = window.M.Carousel.init(this._carousel, options);
    }
  }

  componentWillUnmount() {
    if (typeof $ !== 'undefined') {
      window.$(this._carousel).carousel('destroy');
    } else if (typeof M !== 'undefined') {
      this.instance.destroy();
    }
  }

  renderItems(child, centerImages) {
    if (typeof child === 'string') {
      return (
        <a
          className={cx('carousel-item', {
            'valign-wrapper': centerImages
          })}
        >
          <img src={child} />
        </a>
      );
    }
    return React.cloneElement(child, {
      className: cx(child.props.className, 'carousel-item')
    });
  }

  renderFixedItem() {
    const { fixedItem } = this.props;
    return (
      fixedItem && <div className="carousel-fixed-item center">{fixedItem}</div>
    );
  }

  render() {
    const {
      children,
      className,
      carouselId,
      images,
      centerImages,
      options = {}
    } = this.props;
    const elemsToRender = children || images || [];

    return (
      elemsToRender && (
        <div
          id={carouselId}
          ref={el => {
            this._carousel = el;
          }}
          className={cx(
            'carousel',
            { 'carousel-slider': options.fullWidth },
            className
          )}
        >
          {this.renderFixedItem()}
          {React.Children.map(elemsToRender, child =>
            this.renderItems(child, this.props.centerImages)
          )}
        </div>
      )
    );
  }
}

Carousel.propTypes = {
  /*
  * Children to render as slider elements
  */
  children: PropTypes.any,
  /*
  * Array of image url's
  */
  images: PropTypes.arrayOf(PropTypes.string),
  /*
  * Makes the images centered inside the carousel using '.valign-wrapper' CSS helper
  */
  centerImages: PropTypes.bool,
  /*
  * Fixed element on slider
  */
  fixedItem: PropTypes.node,
  /*
  * Additional classNames for carousel wrapper
  */
  className: PropTypes.string,
  /*
  * Carousel ID for jQuery manipulating
  */
  carouselId: PropTypes.string,
  /*
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
  */
  options: PropTypes.shape({
    /*
    * Transition duration in milliseconds. (Default: 200)
    */
    duration: PropTypes.number,
    /*
    * Perspective zoom. If 0, all items are the same size. (Default: -100)
    */
    dist: PropTypes.number,
    /*
    * Set the spacing of the center item. (Default: 0)
    */
    shift: PropTypes.number,
    /*
    * Set the padding between non center items. (Default: 0)
    */
    padding: PropTypes.number,
    /*
    * Set the number of visible items. (Default: 5)
    */
    numVisible: PropTypes.number,
    /*
    * Make the carousel a full width slider. (Default: false)
    */
    fullWidth: PropTypes.bool,
    /*
    * Set to true to show indicators. (Default: false)
    */
    indicators: PropTypes.bool,
    /*
     * Don't wrap around and cycle through items. (Default: false)
    */
    noWrap: PropTypes.bool,
    /*
    * Callback for when a new slide is cycled to. (Default: null)
    */
    onCycleTo: PropTypes.func
  })
};

export default Carousel;
