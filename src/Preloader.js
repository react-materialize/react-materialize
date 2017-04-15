import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Spinner from './Spinner';

let colors = ['blue', 'red', 'yellow', 'green'];

class Preloader extends Component {
  render () {
    let classes = {
      'preloader-wrapper': true,
      active: this.props.active
    };

    if (this.props.size) {
      classes[this.props.size] = true;
    }

    let spinners;
    if (this.props.flashing) {
      spinners = [];
      colors.map(color => {
        spinners.push(<Spinner color={color} only={false} key={color} />);
      });
    } else {
      spinners = <Spinner color={this.props.color} />;
    }
    return (
      <div className={cx(this.props.className, classes)}>
        {spinners}
      </div>
    );
  }
}

Preloader.propTypes = {
  className: PropTypes.string,
  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: PropTypes.oneOf(['big', 'small', 'medium']),
  /**
   * Whether to spin
   * @default true
   */
  active: PropTypes.bool,
  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'green']),
  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: PropTypes.bool
};

Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue'
};

export default Preloader;
