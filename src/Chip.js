import React, { Component, PropTypes } from 'react';

class Chip extends Component {
  render () {
    let close = '';
    if (this.props.close) {
      close = <i className='material-icons'>close</i>;
    }

    return (
      <div className='chip'>
        {this.props.children}
        {close}
      </div>
    );
  }
}

Chip.propTypes = {
  children: PropTypes.node,
  /**
   * If show a close icon
   * @default false
   */
  close: PropTypes.bool
};

export default Chip;
