import React from 'react';
import cx from 'classnames';

class ProgressBar extends React.Component {
  render() {
    let classes, style;
    if(typeof this.props.progress === 'undefined') {
      classes = {indeterminate: true};
    } else {
      classes = {determinate: true};
      style = {
        width: this.props.progress + '%',
      };
    }

    return (
      <div className={cx('progress', this.props.className)}>
        <div className={cx(classes)} style={style}></div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  /**
   * A number between 0..100 that indicates the current progress,
   * when provided, a determinate bar with the progress is displayed,
   * otherwise a indeterminate bar is shown
   */
  progress: React.PropTypes.number,
};

export default ProgressBar;
