import React from 'react';
import cx from 'classnames';

class Slider extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    let {indicators, interval, transition} = this.props;
    $('.slider').slider({
      full_width: this.props.fullscreen,
      indicators,
      interval,
      transition,
    });
  }

  render() {
    let {fullscreen, children, className, ...props} = this.props;
    let classes = {
      fullscreen,
      slider: true
    };
    return (
      <div className={cx(classes, className)}>
        <ul className="slides">
          {children}
        </ul>
      </div>
    );
  }
}

Slider.propTypes = {
  /**
  *
  */
  fullscreen: React.PropTypes.bool,
  /**
  * Set to false to hide slide indicators
  * @default true
  */
  indicators: React.PropTypes.bool,
  /**
  * The interval between transitions in ms
  * @default 6000
  */
  interval: React.PropTypes.number,
  /**
  * The duration of the transation animation in ms
  * @default 500
  */
  transition: React.PropTypes.number,
};

Slider.defaultProps = {
  fullscreen: false,
  indicators: true,
  interval: 6000,
};

export default Slider;
