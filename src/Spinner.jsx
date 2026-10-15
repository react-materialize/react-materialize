import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Spinner = ({ color, only, className }) => {
  const spinnerClasses = cx('spinner-layer', {
    [`spinner-${color}-only`]: only,
    [`spinner-${color}`]: !only
  });

  return (
    <div className={cx(spinnerClasses, className)}>
      <div className="circle-clipper left">
        <div className="circle" />
      </div>
      <div className="gap-patch">
        <div className="circle" />
      </div>
      <div className="circle-clipper right">
        <div className="circle" />
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  only: true
};

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  only: PropTypes.bool
};

export default Spinner;
