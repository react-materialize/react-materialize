import React, { Component } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import constants from './constants';
import cx from 'classnames';
import idgen from './idgen';

class Button extends Component {
  constructor(props) {
    super(props);
    this.renderFab = this.renderFab.bind(this);
  }

  componentDidMount() {
    if (typeof M === 'undefined') return;

    const { tooltip, tooltipOptions = {}, fab } = this.props;
    if (tooltip) {
      this.instance = M.Tooltip.init(this._btnEl, tooltipOptions);
    }

    if (fab) {
      this.instance = M.FloatingActionButton.init(this._floatingActionBtn, fab);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const {
      children,
      className,
      node,
      fab,
      modal,
      flat,
      floating,
      large,
      small,
      disabled,
      waves,
      tooltip,
      icon,
      ...other
    } = this.props;

    let C = node;
    let classes = {
      btn: true,
      disabled,
      'waves-effect': waves
    };

    if (constants.WAVES.indexOf(waves) > -1) {
      classes['waves-' + waves] = true;
    }

    let styles = { flat, floating, large, small };
    constants.STYLES.forEach(style => {
      if (styles[style]) {
        classes.btn = false;
        classes['btn-' + style] = true;
      }
    });

    if (modal) {
      classes['modal-' + modal] = true;
    }
    if (fab) {
      return this.renderFab(cx(classes, className));
    } else {
      return (
        <C
          {...other}
          disabled={!!disabled}
          onClick={this.props.onClick}
          className={cx(classes, className)}
          ref={el => (this._btnEl = el)}
          data-tooltip={tooltip}
        >
          {icon}
          {children}
        </C>
      );
    }
  }

  renderFab(classes) {
    const {
      fab,
      floating,
      large,
      className,
      icon = <Icon>edit</Icon>,
      ...other
    } = this.props;

    return (
      <div
        {...other}
        ref={el => (this._floatingActionBtn = el)}
        className={cx('fixed-action-btn', {
          toolbar: fab && fab.toolbarEnabled
        })}
      >
        <a className={classes}>{icon}</a>
        <ul>
          {React.Children.map(this.props.children, child => {
            return <li key={idgen()}>{child}</li>;
          })}
        </ul>
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Enable other styles
   */
  flat: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  floating: PropTypes.bool,
  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   *  FAB Options are here: https://materializecss.com/floating-action-button.html#options
   * @default false
   * @default options {
   *  direction: 'top',
   *  hoverEnabled: true,
   *  toolbarEnabled: false,
   * }
   */
  fab: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
      hoverEnabled: PropTypes.bool,
      toolbarEnabled: PropTypes.bool
    })
  ]),
  /**
   * The icon to display, if specified it will create a button with the material icon.
   */
  icon: PropTypes.node,
  modal: PropTypes.oneOf(['close', 'confirm']),
  node: PropTypes.node,
  /**
   * Will be disabled when fab is set.
   */
  onClick: PropTypes.func,
  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: PropTypes.string,
  /**
   * Tooltips options as here
   * http://archives.materializecss.com/0.100.2/dialogs.html#tooltip
   */
  tooltipOptions: PropTypes.shape({
    delay: PropTypes.number,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    tooltip: PropTypes.string,
    html: PropTypes.bool
  }),
  waves: PropTypes.oneOf([
    'light',
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'teal'
  ])
};

Button.defaultProps = {
  node: 'button'
};

export default Button;
