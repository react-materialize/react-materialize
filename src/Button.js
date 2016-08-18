import React, { Component, PropTypes } from 'react';
import constants from './constants';
import cx from 'classnames';
import Icon from './Icon';
import idgen from './idgen';

class Button extends Component {
  constructor (props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
    this.renderFab = this.renderFab.bind(this);
  }

  render () {
    const { className, node, fab, modal, disabled, waves } = this.props;
    let C = node;
    let classes = {
      btn: true,
      disabled,
      'waves-effect': waves
    };

    if (constants.WAVES.indexOf(waves) > -1) {
      classes['waves-' + waves] = true;
    }

    constants.STYLES.forEach(style => {
      classes['btn-' + style] = this.props[style];
    });

    if (modal) {
      classes['modal-action'] = true;
      classes['modal-' + modal] = true;
    }
    if (fab) {
      return this.renderFab(cx(classes, className));
    } else {
      return (
        <C onClick={this.props.onClick} className={cx(classes, className)}>
          { this.renderIcon() }
          { this.props.children }
        </C>
      );
    }
  }

  renderFab (className) {
    return (
      <div className='fixed-action-btn'>
        <a className={className}>{ this.renderIcon() }</a>
        <ul>
          {
            React.Children.map(this.props.children, child => {
              return <li key={idgen()}>{child}</li>;
            })
          }
        </ul>
      </div>
    );
  }

  renderIcon () {
    const { icon } = this.props;
    if (!icon) return;

    return <Icon>{this.props.icon}</Icon>;
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  /**
   * Enable the floating style
   */
  floating: PropTypes.bool,
  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   * @default vertical
   */
  fab: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * The icon to display, if specified it will create a button with the material icon
   */
  icon: PropTypes.string,
  large: PropTypes.bool,
  modal: PropTypes.oneOf(['close', 'confirm']),
  node: PropTypes.node,
  /**
   * Tooltip to show when mouse hovered
   */
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
  waves: PropTypes.oneOf(constants.WAVES)
};

Button.defaultProps = {
  node: 'button'
};

export default Button;
