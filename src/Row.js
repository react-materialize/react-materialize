import React from 'react';
import cx from 'classnames';

class Row extends React.Component {
  render() {
    let C = this.props.node;
    return (
      <C className={cx('row', this.props.className)}
        {...this.props}>
        {this.props.children}
      </C>
    );
  }
}

Row.propTypes = {
  node: React.PropTypes.node.isRequired
};

Row.defaultProps = {node: 'div'};

export default Row;
