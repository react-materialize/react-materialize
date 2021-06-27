import React, { Fragment, useEffect, useRef, useMemo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import idgen from './idgen';

const SideNav = ({
  options,
  id,
  className,
  children,
  trigger,
  fixed,
  ...props
}) => {
  const sidenavRef = useRef(null);
  const triggerRef = useRef(null);
  const classNames = cx(
    'sidenav',
    { 'sidenav-fixed': fixed || !trigger },
    className
  );

  useEffect(() => {
    const instance = M.Sidenav.init(sidenavRef.current, options);

    return () => instance.destroy();
  }, [options, children]);

  const renderTrigger = useMemo(() => {
    if (!trigger) return;

    const triggerView = fixed ? 'hide-on-large-only' : 'show-on-large';
    const classNames = cx(
      trigger.props.className,
      triggerView,
      'sidenav-trigger'
    );

    return React.cloneElement(trigger, {
      ref: triggerRef,
      'data-target': id,
      className: classNames
    });
  }, [id, fixed, trigger]);

  return (
    <Fragment>
      {renderTrigger}
      <ul
        ref={el => (sidenavRef.current = el)}
        id={id}
        className={classNames}
        {...props}
      >
        {children}
      </ul>
    </Fragment>
  );
};

SideNav.propTypes = {
  /**
   * Adds sidenav-fixed class to sidenav
   */
  fixed: PropTypes.bool,
  /**
   * sidenav id. If none is passed, an id will be generated.
   * @default idgen()
   */
  id: PropTypes.string,
  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: PropTypes.node,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: PropTypes.shape({
    edge: PropTypes.oneOf(['left', 'right']),
    draggable: PropTypes.bool,
    inDuration: PropTypes.number,
    outDuration: PropTypes.number,
    onOpenStart: PropTypes.func,
    onOpenEnd: PropTypes.func,
    onCloseStart: PropTypes.func,
    onCloseEnd: PropTypes.func,
    preventScrolling: PropTypes.bool
  }),
  /**
   * Additional classes added to 'sidenav'
   */
  className: PropTypes.string,
  children: PropTypes.node
};

SideNav.defaultProps = {
  get id() {
    return `SideNav-${idgen()}`;
  }
};

export default SideNav;
