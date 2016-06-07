import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import idgen from './idgen';

import Row from './Row';
import Col from './Col';

class Tabs extends Component {
  componentDidMount() {
    $(this._tabs).tabs();
  }

  renderChildren(idx) {
    return (
      React.Children.map(this.props.children, (child, id) => {
        const {
          title,
          tabWidth,
          className,
          active,
          disabled
        } = child.props;

        let classes = {
          tab: true,
          disabled,
          col: true
        };
        if (tabWidth) { classes['s' + tabWidth] = true; }
        const target = '#tab_' + id + idx;

        return (
          <li className={cx(classes, className)} key={idx}>
            <a href={target} className={active ? 'active' : ''}>{title}</a>
          </li>
        );
      })
    );
  }

  renderTabContent(idx) {
    return (
      React.Children.map(this.props.children, (child, id) => {
        return (
          <Col id={'tab_' + id + idx} s={12} key={'tab' + id + idx}>
            { child.props.children }
          </Col>
        );
      })
    );
  }

  render() {
    const { className, ...props } = this.props;
    const idx = idgen();

    return (
      <Row>
        <Col s={12}>
          <ul ref={(u) => this._tabs = u} {...props} className={cx('tabs', className)}>
            { this.renderChildren(idx) }
          </ul>
        </Col>
        { this.renderTabContent(idx) }
      </Row>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Tabs;
