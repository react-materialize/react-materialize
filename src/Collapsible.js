import React, { Children, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Collapsible = ({
  children,
  className,
  accordion,
  options,
  defaultActiveKey,
  popout,
  onSelect,
  ...props
}) => {
  const _collapsible = useRef(null);
  const collapsible = accordion ? 'accordion' : 'expandable';
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const renderItem = (child, key) => {
    if (!child) return null;

    // Extend with props if child is a react component
    if (typeof child.type === 'function') {
      Object.assign(props, {
        expanded: activeKey === key || child.props.expanded,
        eventKey: key
      });
    }

    return React.cloneElement(child, {
      onSelect: () => handleSelect(key)
    });
  };

  const handleSelect = key => {
    if (onSelect) {
      onSelect(key);
    }

    if (activeKey === key) {
      setActiveKey(null);
    }

    if (accordion) {
      setActiveKey(key);
    }
  };

  useEffect(() => {
    if (typeof M !== 'undefined') {
      const instance = M.Collapsible.init(_collapsible.current, {
        accordion: accordion,
        ...options
      });

      return () => {
        instance && instance.destroy();
      };
    }
  }, [_collapsible, accordion, options, children]);

  return (
    <ul
      ref={_collapsible}
      className={cx(className, {
        collapsible,
        expandable: accordion !== true,
        popout
      })}
      data-collapsible={collapsible}
      {...props}
    >
      {Children.map(children, renderItem)}
    </ul>
  );
};

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default true
   */
  accordion: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Enable popout style
   */
  popout: PropTypes.bool,
  /**
   * The default CollapsibleItem that should be expanded. This value should match the specified
   * item's eventKey value. Ignored if accordion is false.
   */
  defaultActiveKey: PropTypes.any,
  onSelect: PropTypes.func,
  /**
   * Options passed to initializer
   */
  options: PropTypes.any
};

Collapsible.defaultProps = {
  accordion: true
};

export default Collapsible;
