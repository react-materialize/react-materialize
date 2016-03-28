import React from 'react';
import constants from './constants';
import cx from 'classnames';
import Icon from './Icon';
import idgen from './idgen';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
    this.renderFab = this.renderFab.bind(this);
  }

  render() {
    let {
      className, node, fab, modal, disabled, waves, ...props
    } = this.props;
    let C = node || 'button';
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
        <C {...props} className={cx(classes, className)}>
          { this.renderIcon() }
          { this.props.children }
        </C>
      );
    }
  }

  renderFab(className) {
    return (
      <div className='fixed-action-btn'>
        <a className={className}>
          { this.renderIcon() }
        </a>
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
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
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
  waves: React.PropTypes.oneOf(constants.WAVES)
};


export default Button;
