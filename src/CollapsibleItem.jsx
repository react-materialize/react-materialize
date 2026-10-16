import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CollapsibleItem = ({
  className,
  eventKey,
  expanded = false,
  header,
  children,
  icon,
  iconClassName,
  node: Node = 'div',
  onSelect,
  ...props
}) => (
  <li className={cx(className, { active: expanded })} {...props}>
    <Node
      className={cx('collapsible-header', { active: expanded })}
      onClick={() => onSelect(eventKey)}
    >
      {icon}
      {header}
    </Node>
    <div className="collapsible-body">{children}</div>
  </li>
);

CollapsibleItem.propTypes = {
  header: PropTypes.any.isRequired,
  icon: PropTypes.node,
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

export default CollapsibleItem;
