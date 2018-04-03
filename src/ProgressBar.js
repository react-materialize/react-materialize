import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ProgressBar = ({ progress, className }) => {
  let style;
  const classes = {
    indeterminate: progress === undefined,
    determinate: !!progress
  };
  if (progress) {
    style = {
      width: progress + '%'
    };
  }

  return (
    <div className={cx('progress lighten-5', className)}>
      <div className={cx(classes, className)} style={style} />
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  /**
   * A number between 0..100 that indicates the current progress,
   * when provided, a determinate bar with the progress is displayed,
   * otherwise a indeterminate bar is shown
   */
  progress: PropTypes.number
};

export default ProgressBar;
