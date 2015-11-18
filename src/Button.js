import React from 'react';
import constants from './constants';
import cx from 'classnames';
import Icon from './Icon';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  render() {
    let C = this.props.node || 'button';
    let classes = {
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
      <C {...this.props} className={cx(classes, this.props.className)}>
        { this.renderIcon() }
        { this.props.children }
      </C>
    );
  }

  renderIcon() {
    if (this.props.icon) {
      return <Icon>{this.props.icon}</Icon>;
    } else {
      return null;
    }
  }
}

Button.propTypes = {
  disabled: React.PropTypes.bool,
  /**
   * Enable the floating style
   */
  floating: React.PropTypes.bool,
  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions
   * @default vertical
   */
  fab: React.PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * The icon to display, if specified it will create a button with the material icon
   */
  icon: React.PropTypes.string,
  large: React.PropTypes.bool,
  modal: React.PropTypes.oneOf(['close', 'confirm']),
  node: React.PropTypes.node,
  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: React.PropTypes.string,
  waves: React.PropTypes.oneOf(constants.WAVES),
};


export default Button;
