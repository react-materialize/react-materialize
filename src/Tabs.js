import React, { Component } from 'react';
import cx from 'classnames';

import Row from './Row';
import Col from './Col';

class Tabs extends Component {
  componentDidMount () {
    if (typeof $ !== 'undefined') {
      $(this.tabsEl).tabs();
    }
  }

  _onSelect (idx, e) {
    const { onChange } = this.props;

    if (onChange) onChange(idx, e);
  }

  render () {
    const {
      children,
      className,
      defaultValue
    } = this.props;

    return (
      <Row>
        <Col s={12}>
          <ul className={cx('tabs', className)} ref={(el) => (this._tabsEl = el)}>
            {
              React.Children.map(children, (child, idx) => {
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
                    <a href={`#tab_${idx}`} className={active || defaultValue === idx ? 'active' : ''}
                      {...disabled ? {} : { onClick: this._onSelect.bind(this, idx) }}
                    >
                      { title }
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </Col>
        {
          children.map((child, idx) =>
            <Col id={`tab_${idx}`} s={12} key={`tab_${idx}`}>
              { child.props.children }
            </Col>
          )
        }
      </Row>
    );
  }
}

export default Tabs;
