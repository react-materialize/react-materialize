import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Range = props => {
  const instance = useRef(null);
  const rangeRef = useRef(null);

  useEffect(() => {
    instance.current = M.Range.init(rangeRef.current);

    return () => {
      if (instance.current) {
        instance.current.destroy();
      }
    };
  }, [rangeRef.current, instance.current]);

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
