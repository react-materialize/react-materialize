import React from 'react';
import constants from './constants';
import cx from 'classnames';

class Button extends React.Component {
  render() {
    var C = this.props.node || 'button';
    var classes = {
      btn: true,
      disabled: this.props.disabled,
      'waves-effect': !!this.props.waves
    };

    if (constants.WAVES.indexOf(this.props.waves) > -1) {
      classes['waves-' + this.props.waves] = true;
    }

    constants.STYLES.forEach(style => {
      classes['btn-' + style] = this.props[style];
    });

    if (this.props.modal) {
      classes['modal-action'] = true;
      classes['modal-' + this.props.modal] = true;
    }
    return (
      <C {...this.props} className={cx(classes)}>
        {this.props.children}
      </C>
    );
  }
}

Button.propTypes = {
    node: React.PropTypes.node,
    waves: React.PropTypes.oneOf(constants.WAVES),
    large: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    modal: React.PropTypes.oneOf(['close', 'confirm'])
};


export default Button;
