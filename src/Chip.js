import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

class Chip extends Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  renderIcon() {
    return <Icon className="close material-icons">close</Icon>;
  }

  render() {
    const { children, close } = this.props;

    return (
      <div className="chip">
        {children}
        {close && this.renderIcon()}
      </div>
    );
  }
}

Chip.propTypes = {
  children: PropTypes.node,
  /**
   * Shows a close icon
   */
  close: PropTypes.bool
};

Chip.defaultProps = {
  close: false
};

export default Chip;
