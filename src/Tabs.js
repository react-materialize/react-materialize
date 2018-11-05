import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';
import cx from 'classnames';

import Row from './Row';
import Col from './Col';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.scope = `${idgen()}`;
  }

  _onSelect(idx, e) {
    const { onChange } = this.props;

    if (onChange) onChange(idx, e);
  }

  componentDidMount() {
    const { tabOptions = {} } = this.props;

    if (typeof M !== 'undefined') {
      this.instance = M.Tabs.init(this._tabsEl, tabOptions);
    }
  }

  componentDidUpdate() {
    const { tabOptions = {} } = this.props;

    if (typeof M !== 'undefined') {
      this.instance.destroy();
      this.instance = M.Tabs.init(this._tabsEl, tabOptions);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const { children, className, defaultValue } = this.props;
    return (
      <Row>
        <Col s={12}>
          <ul className={cx('tabs', className)} ref={el => (this._tabsEl = el)}>
            {React.Children.map(children, (child, id) => {
              const idx = `${this.scope}${id}`;
              const {
                active,
                className,
                disabled,
                tabWidth,
                title
              } = child.props;

              const classes = {
                [`s${tabWidth}`]: tabWidth,
                tab: true,
                disabled,
                col: true
              };

              return (
                <li className={cx(classes, className)} key={idx}>
                  <a
                    href={`#tab_${idx}`}
                    className={active || defaultValue === idx ? 'active' : ''}
                    {...(disabled
                      ? {}
                      : { onClick: this._onSelect.bind(this, idx) })}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
        {React.Children.map(children, (child, id) => {
          const idx = `${this.scope}${id}`;
          return (
            <Col
              id={`tab_${idx}`}
              s={12}
              key={`tab${idx}`}
              style={{
                display:
                  child.props.active || defaultValue === idx ? 'block' : 'none'
              }}
            >
              {child.props.children}
            </Col>
          );
        })}
      </Row>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  /*
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  tabOptions: PropTypes.shape({
    /*
     * Transition duration in milliseconds.
     * @default 300
     */
    duration: PropTypes.number,
    /*
     * Callback for when a new tab content is showns.
     * @default null
     */
    onShow: PropTypes.func,
    /*
     * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
     * @default false
     */
    swipeable: PropTypes.bool,
    /*
     * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
     * @default Infinity
     */
    responsiveThreshold: PropTypes.number
  })
};

export default Tabs;
