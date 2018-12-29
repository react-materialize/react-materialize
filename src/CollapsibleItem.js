import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

const CollapsibleItem = ({
  className,
  eventKey,
  expanded,
  header,
  children,
  icon,
  iconClassName,
  node: Node,
  onSelect,
  ...props
}) => (
  <li className={cx(className, { active: expanded })} {...props}>
    <Node
      className={cx('collapsible-header', { active: expanded })}
      onClick={() => onSelect(eventKey)}
    >
      {icon && <Icon className={iconClassName}>{icon}</Icon>}
      {header}
    </Node>
    <div className="collapsible-body">{children}</div>
  </li>
);

CollapsibleItem.propTypes = {
  header: PropTypes.any.isRequired,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  children: PropTypes.node,
  onSelect: PropTypes.func,
  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: PropTypes.bool,
  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: PropTypes.any,
  className: PropTypes.string,
  /**
   * The node type of the header
   * @default a
   */
  node: PropTypes.node
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};

export default CollapsibleItem;
