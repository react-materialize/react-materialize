import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.renderFixedItem = this.renderFixedItem.bind(this);
  }

  componentDidMount () {
    const { options = {} } = this.props;

    if (typeof $ !== 'undefined') {
      $(this._carousel).carousel(options);
    }
  }

  renderItems (child, idx) {
    if (typeof child === 'string') {
      return (
        <a className='carousel-item'><img src={child} /></a>
      );
    }
    return React.cloneElement(child, {
      className: cx(child.props.className, 'carousel-item')
    });
  }

  renderFixedItem () {
    const { fixedItem } = this.props;
    return fixedItem && (<div className='carousel-fixed-item center'>{ fixedItem }</div>);
  }

  render () {
    const { children, className, carouselId, images, options = {} } = this.props;
    const elemsToRender = children || images || [];

    return (elemsToRender) && (
      <div
        id={carouselId}
        ref={(el) => { this._carousel = el; }}
        className={cx('carousel', { 'carousel-slider': options.fullWidth }, className)}
      >
        { this.renderFixedItem() }
        { React.Children.map(elemsToRender, this.renderItems) }
      </div>
    );
  }
};

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
    * Make the carousel a full width slider like the second example. (Default: false)
    */
    fullWidth: PropTypes.bool,
    /*
    * Set to true to show indicators. (Default: false)
    */
    indicators: PropTypes.bool,
    /*
     * Don't wrap around and cycle through items. (Default: false)
    */
    noWrap: PropTypes.bool
  })
};

export default Carousel;
