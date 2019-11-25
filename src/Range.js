import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Range = props => {
  const rangeRef = useRef(null);

  useEffect(() => {
    const instance = M.Range.init(rangeRef.current);

    return () => {
      instance && instance.destroy();
    };
  }, []);

  return (
    <p className="range-field">
      <input type="range" ref={rangeRef} {...props} />
    </p>
  );
};

Range.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired
};

export default Range;
