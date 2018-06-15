import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import constants from './constants';

class CardTitle extends Component {
  render() {
    let { image, reveal, waves, children, ...props } = this.props;
    const classes = cx({
      'card-image': true,
      'waves-effect': waves,
      'waves-block': waves,
      [`waves-${waves}`]: waves
    });

    return (
      <div className={cx(classes)} {...props}>
        <img className={cx({ activator: reveal })} src={image} />
        <span className={cx('card-title')}>{children}</span>
      </div>
    );
  }
}

CardTitle.propTypes = {
  children: PropTypes.node,
  // Whether the image serves as activator for the reveal
  reveal: PropTypes.bool,
  // the waves effect
  waves: PropTypes.oneOf(constants.WAVES),
  // The path to the image
  image: PropTypes.string.isRequired
};

export default CardTitle;
