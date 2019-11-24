import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Parallax = ({ children, className, image, options, ...props }) => {
  const parallaxContainer = useRef(null);

  useEffect(() => {
    let instance = null;

    if (parallaxContainer.current) {
      if (typeof M !== 'undefined') {
        instance = M.Parallax.init(parallaxContainer.current, options);
      }
    }

    return instance && instance.destroy();
  }, [parallaxContainer]);

  return (
    <div className={cx('parallax-container', className)} {...props}>
      {children}
      <div className="parallax" ref={parallaxContainer}>
        {image}
      </div>
    </div>
  );
};

Parallax.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * The image which will be used for the background of the parallax
   */
  image: PropTypes.node.isRequired,
  options: PropTypes.shape({
    /**
     * The minimum width of the screen, in pixels, where the parallax functionality starts working.
     */
    responsiveThreshold: PropTypes.number
  })
};

Parallax.defaultProps = {
  options: {
    responsiveThreshold: 0
  }
};

export default Parallax;
