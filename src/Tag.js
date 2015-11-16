import React from 'react';
import Chip from './Chip';

class Tag extends React.Component {
  render() {
    return (
      <Chip close>{this.props.children}</Chip>
    );
  }
}

export default Tag;
