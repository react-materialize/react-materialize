import React from 'react';
import cx from 'classnames';

import Row from './Row';
import Col from './Col';

class Tab extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12}>
          <ul className='tabs'>
            {
              React.Children.map(this.props.children, (child, idx) => {
                let classes = {
                  tab: true,
                  s3: true,
                  col: true
                };
                let target = '#tab_' + idx;
                return (
                  <li className={cx(classes)} key={idx}>
                    <a href={target}>{child.props.tab}</a>
                  </li>
                );
              })
            }
          </ul>
        </Col>
        {
          React.Children.map(this.props.children, (child, idx) => {
            return <Col id={'tab_' + idx} s={12} key={'tab' + idx}>{child.props.children}</Col>;
          })
        }
      </Row>
    );
  }
}

export default Tab;
