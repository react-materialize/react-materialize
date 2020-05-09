import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Range = ({ min, max, step }) => {
  const rangeRef = useRef(null);

  useEffect(() => {
    const instance = M.Range.init(rangeRef.current);

    return () => {
      instance && instance.destroy();
    };
  }, [min, max]);

  return (
    <p className="range-field">
      <input type="range" ref={rangeRef} min={min} max={max} step={step} />
    </p>
  );
};

Range.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string
};

export default Range;
