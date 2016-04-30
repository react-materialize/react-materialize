import React from 'react';
import cx from 'classnames';

import Row from './Row';
import Col from './Col';

class Tabs extends React.Component {

  componentDidMount() {
    if (typeof $ !== 'undefined') {
      $(this.tabsEl).tabs()
    }
  }

  _onSelect(idx, e) {
    if (this.props.hasOwnProperty('onChange')) {
      this.props.onChange(idx, e)
    }
  }

  render() {
    let {children, className, defaultValue, ...props} = this.props;
    return (
      <Row>
        <Col s={12}>
          <ul className={cx('tabs', className)} ref={(ref) => this.tabsEl = ref}>
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
                    <a href={target} className={active || defaultValue === idx ? 'active' : ''}
                     {...disabled ? {} : {onClick : this._onSelect.bind(this, idx)}}>{title}</a>
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
