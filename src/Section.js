import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    return <div className="section">{this.props.children}</div>;
  }
}

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
