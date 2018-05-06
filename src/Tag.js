import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from './Chip';

class Tag extends Component {
  render() {
    const { children } = this.props;

    return <Chip close>{children}</Chip>;
  }
}

Tag.propTypes = {
  children: PropTypes.node
};

export default Tag;
