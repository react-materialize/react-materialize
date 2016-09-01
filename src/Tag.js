import React, { Component, PropTypes } from 'react';
import Chip from './Chip';

class Tag extends Component {
  render () {
    return (
      <Chip close>{this.props.children}</Chip>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.node
}

export default Tag;
