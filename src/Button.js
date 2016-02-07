import React from 'react';
import constants from './constants';
import cx from 'classnames';
import Icon from './Icon';
import idgen from './idgen';

const Button = ({
  className,
  node,
  fab,
  modal,
  disabled,
  waves,
  ...props
}) => {
  let C = node;
  let classes = {
    disabled,
    'btn': true
  };

  constants.STYLES.forEach(style => {
    classes['btn-' + style] = props[style];
  });

  if (waves) {
    classes['waves-effect'] = true;
    classes['waves-' + waves] = (constants.WAVES.indexOf(waves) > -1);
  }

  if (modal) {
    classes['modal-action'] = true;
    classes['modal-' + modal] = true;
  }

  let renderIcons = function() {
    if (props.icon) {
      return <Icon>{props.icon}</Icon>;
    }
  }.bind(this);

  let renderFab = function() {
    return (
      <div className='fixed-action-btn'>
        <a className={cx(classes, className)}>
          { renderIcons() }
        </a>
        <ul>
          {
            React.Children.map(props.children, child => {
              return <li key={idgen()}>{child}</li>;
            })
          }
        </ul>
      </div>
    )
  }.bind(this);

  if (fab) {
    return renderFab();
  } else {
    return (
      <C {...props} className={cx(classes, className)}>
        { renderIcons() }
        { props.children }
      </C>
    );
  };
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
  waves: React.PropTypes.oneOf(constants.WAVES),
};

Button.defaultProps = { node: 'button' };

export default Button;
