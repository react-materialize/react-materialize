import React from 'react';
import PropTypes from 'prop-types';

class Range extends React.Component {
  componentDidMount() {
    if (typeof M !== 'undefined') {
      this.instance = M.Range.init(this._range);
    }
  }

  componentWillUnmount() {
    this.instance && this.instance.destroy();
  }

  render() {
    return (
      <p className="range-field">
        <input
          type="range"
          ref={el => {
            this._range = el;
          }}
          {...this.props}
        />
      </p>
    );
  }
}

Range.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired
};

export default Range;
