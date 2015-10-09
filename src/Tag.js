import React from 'react';
import Chip from './Chip';

export default class Tag extends React.Component {
  render() {
    return (
      <Chip close>{this.props.children}</Chip>
    );
  }
}
