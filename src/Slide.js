import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import constants from './constants';

class Slide extends Component {
  constructor (props) {
    super(props);
    this.renderCaption = this.renderCaption.bind(this);
  }

  render () {
    return (
      <li>
        <img src={this.props.src} />
        {this.renderCaption()}
      </li>
    );
  }

  renderCaption () {
    const {
      title,
      className,
      alignment,
      children,
      ...props
    } = this.props;

    delete props.placement;

    const classes = {
      caption: true,
      [alignment + '-align']: alignment
    };

    if (typeof title !== 'undefined' || typeof children !== 'undefined') {
      return (
        <div className={cx(classes)} {...props}>
          <h3>{title}</h3>
          <h5 className={className}>{children}</h5>
        </div>
      );
    } else return null;
  }
}

Slide.propTypes = {
  /**
  * Aliment of the caption
  * @default 'center'
  */
  alignment: PropTypes.oneOf(constants.PLACEMENTS),
  className: PropTypes.string,
  children: PropTypes.node,
  /**
  * The tagline of the caption
  */
  title: PropTypes.string,
  /**
   * The path of the background image
   */
  src: PropTypes.string.isRequired
};

Slide.defaultProps = {
  placement: 'center'
};

export default Slide;
