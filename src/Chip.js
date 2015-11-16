import React from 'react';

class Chip extends React.Component {
  render() {
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
  /**
   * If show a close icon
   * @default false
   */
  close: React.PropTypes.bool,
};

export default Chip;
