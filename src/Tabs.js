import React from 'react';
import cx from 'classnames';

import Row from './Row';
import Col from './Col';

class Tabs extends React.Component {
  render() {
    let {children, className, ...props} = this.props;
    return (
      <Row>
        <Col s={12}>
          <ul className={cx('tabs', className)}>
            {
              React.Children.map(children, (child, idx) => {
                let {title, tabWidth, className, active, disabled} = child.props;
                //if (!tabWidth) {
                //  tabWidth = Math.floor(12 / count);
                //}
                let classes = {
                  tab: true,
                  disabled,
                  col: true
                };
                if (tabWidth) classes['s' + tabWidth] = true;
                let target = '#tab_' + idx;
                return (
                  <li className={cx(classes, className)} key={idx}>
                    <a href={target} className={active ? 'active' : ''}>{title}</a>
                  </li>
                );
              })
            }
          </ul>
        </Col>
        {
          React.Children.map(children, (child, idx) => {
            return <Col id={'tab_' + idx} s={12} key={'tab' + idx}>{child.props.children}</Col>;
          })
        }
      </Row>
    );
  }
}

export default Tabs;
