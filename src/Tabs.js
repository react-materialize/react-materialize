import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Row from './Row';
import Col from './Col';

class Tabs extends Component {
  componentDidMount () {
    if (typeof $ !== 'undefined') {
      $(this._tabsEl).tabs();
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
          React.Children.map(children, (child, idx) =>
            <Col id={`tab_${idx}`} s={12} key={`tab${idx}`}
              style={{'display': (child.props.active || defaultValue === idx) ? 'block' : 'none'}}>
              { child.props.children }
            </Col>
          )
        }
      </Row>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};

export default Tabs;
