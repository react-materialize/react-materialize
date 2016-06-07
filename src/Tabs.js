import React from 'react';
import cx from 'classnames';
import idgen from './idgen';

import Row from './Row';
import Col from './Col';

class Tabs extends React.Component {
  componentDidMount() {
    $(this._tabs).tabs();
  }

  renderChildren() {
    return (
      React.Children.map(this.props.children, (child, idx) => {
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
        const target = '#tab_' + idx;

        return (
          <li className={cx(classes, className)} key={idx}>
            <a href={target} className={active ? 'active' : ''}>{title}</a>
          </li>
        );
      })
    );
  }

  renderGrandChildren() {
    return (
      React.Children.map(this.props.children, (child, idx) => {
        return (
          <Col id={'tab_' + idx} s={12} key={'tab' + idx}>
            { child.props.children }
          </Col>
        );
      })
    );
  }

  render() {
    const {
      children,
      className,
      ...props
    } = this.props;

    return (
      <Row>
        <Col s={12}>
          <ul ref={(u) => this._tabs = u} className={cx('tabs', className)}>
            { this.renderChildren() }
          </ul>
        </Col>
        { this.renderGrandChildren() }
      </Row>
    );
  }
}

export default Tabs;
