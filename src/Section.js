import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Section extends Component {
  render() {
    const { className, node, id, ...other } = this.props;

    let C = node;
    let classes = {
      section: true
    };

    return (
      <C {...other} id={id} className={cx(classes, className)}>
        {this.props.children}
      </C>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node,
  node: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

Section.defaultProps = {
  node: 'div'
};

export default Section;
