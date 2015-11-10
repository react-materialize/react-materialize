import React from 'react';

export default class Chip extends React.Component {
  render() {
    var close = '';
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
