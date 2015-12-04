import React from 'react';
import cx from 'classnames';

class Spinner extends React.Component {
  render() {
    let {color, only} = this.props;
    let spinnerClasses = {
      'spinner-layer': true
    };
    if (only) {
      spinnerClasses['spinner-' + color + '-only'] = true;
    } else {
      spinnerClasses['spinner-' + color] = true;
    }
    return (
      <div className={cx(spinnerClasses)}>
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    );
  }
}

Spinner.defaultProps = {
  only: true,
};

let colors = ['blue', 'red', 'yellow', 'green'];

class Preloader extends React.Component {
  render() {
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
        spinners.push(<Spinner color={color} only={false} key={color}/>);
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
  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: React.PropTypes.oneOf(['big', 'small', 'medium']),
  /**
   * Whether to spin
   * @default true
   */
  active: React.PropTypes.bool,
  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: React.PropTypes.oneOf(['blue', 'red', 'yellow', 'green']),
  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: React.PropTypes.bool,
};

Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue',
};

export default Preloader;
