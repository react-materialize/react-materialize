import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Spinner = ({ color, only }) => {
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
      <div className='circle-clipper left'>
        <div className='circle' />
      </div>
      <div className='gap-patch'>
        <div className='circle' />
      </div>
      <div className='circle-clipper right'>
        <div className='circle' />
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  only: true
};

Spinner.propTypes = {
  color: PropTypes.string,
  only: PropTypes.bool
};

export default Spinner;
