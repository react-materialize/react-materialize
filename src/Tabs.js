import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement, useEffect, useRef } from 'react';
import idgen from './idgen';
import Row from './Row';
import Tab from './Tab';

const scope = `tabs-${idgen()}`;

const Tabs = ({ children, className, defaultValue, options, onChange }) => {
  const _tabsRef = useRef(null);

  useEffect(() => {
    const instance = M.Tabs.init(_tabsRef.current, options);
    return () => instance.destroy();
  }, [options, children]);

  function ChildrenMap({ tabs, content }) {
    return React.Children.map(children, (child, id) => {
      const {
        active,
        disabled,
        tabWidth,
        title,
        idx = `${scope}${id}`
      } = child.props;

      const classes = {
        [`s${tabWidth}`]: tabWidth,
        tab: true,
        disabled,
        col: true
      };

      if (tabs) {
        return (
          <li className={cx(classes)} key={idx}>
            <a
              href={`#tab_${idx}`}
              className={active || defaultValue === idx ? 'active' : ''}
              {...(disabled ? {} : { onClick: onChange })}
            >
              {title}
            </a>
          </li>
        );
      } else if (content) return cloneElement(child, { idx });
    });
  }

  return (
    <React.Fragment>
      <ul className={cx('tabs', className)} ref={_tabsRef}>
        <ChildrenMap tabs />
      </ul>
      <Row>
        <ChildrenMap content />
      </Row>
    </React.Fragment>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  /**
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  options: PropTypes.shape({
    /**
     * Transition duration in milliseconds.
     * @default 300
     */
    duration: PropTypes.number,
    /**
     * Callback for when a new tab content is showns.
     * @default null
     */
    onShow: PropTypes.func,
    /**
     * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
     * @default false
     */
    swipeable: PropTypes.bool,
    /**
     * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
     * @default Infinity
     */
    responsiveThreshold: PropTypes.number
  })
};

Tab.defaultProps = {
  options: {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  }
};

export default Tabs;
