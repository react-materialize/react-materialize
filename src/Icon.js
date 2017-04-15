import React, { Component } from 'react';
import PropTypes from 'prop-types';
import constants from './constants';
import cx from 'classnames';

class Icon extends Component {
  render () {
    let classes = {
      'material-icons': true
    };
    constants.PLACEMENTS.forEach(p => {
      classes[p] = this.props[p];
    });

    constants.ICON_SIZES.forEach(s => {
      classes[s] = this.props[s];
    });

    return (
      <i className={cx(classes, this.props.className)}>{this.props.children}</i>
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
};

export default Icon;
