import React, { Children, useRef, useEffect } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import constants from './constants';
import cx from 'classnames';
import idgen from './idgen';

const Button = ({
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
  tooltipOptions = {},
  icon,
  ...props
}) => {
  const _btn = useRef(null);
  const _fab = useRef(null);

  useEffect(() => {
    if (tooltip) {
      const instance = M.Tooltip.init(_btn.current, tooltipOptions);

      return () => {
        instance && instance.destroy();
      };
    }
  }, [tooltip, tooltipOptions, children]);

  useEffect(() => {
    if (fab) {
      const instance = M.FloatingActionButton.init(_fab.current, fab);

      return () => {
        instance && instance.destroy();
      };
    }
  }, [fab]);

  const renderFab = classes => {
    return (
      <div
        {...props}
        ref={_fab.current}
        className={cx('fixed-action-btn', {
          toolbar: fab.toolbarEnabled
        })}
      >
        <a className={classes}>{icon || <Icon>edit</Icon>}</a>
        <ul>
          {Children.map(children, child => (
            <li key={idgen()}>{child}</li>
          ))}
        </ul>
      </div>
    );
  };

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
    return renderFab(cx(classes, className));
  } else {
    return (
      <C
        {...props}
        disabled={disabled}
        className={cx(classes, className)}
        ref={_btn}
        data-tooltip={tooltip}
      >
        {icon}
        {children}
      </C>
    );
  }
};

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
   * https://materializecss.com/tooltips.html#options
   */
  tooltipOptions: PropTypes.shape({
    exitDelay: PropTypes.number,
    enterDelay: PropTypes.number,
    html: PropTypes.string,
    margin: PropTypes.number,
    inDuration: PropTypes.number,
    outDuration: PropTypes.number,
    transitionMovement: PropTypes.number,
    delay: PropTypes.number,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
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
