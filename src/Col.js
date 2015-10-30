import React from 'react';
import cx from 'classnames';

import constants from './constants';

class Col extends React.Component {
  render() {
    var {node, offset, className, children, ...props} = this.props;
    var C = node;
    var classes = {col: true};
    constants.SIZES.forEach(s => {
      if (this.props[s]) {
        classes[s + this.props[s]] = true;
      }
    });

    if (offset) {
      offset.split(' ').forEach(off => {
        classes['offset-' + off] = true;
      });
    }
    return (
      <C {...props} className={cx(classes, className)}>
        {children}
      </C>
    );
  }
}

Col.propTypes = {
    node: React.PropTypes.node.isRequired,
    s: React.PropTypes.number,
    m: React.PropTypes.number,
    l: React.PropTypes.number,
    offset: React.PropTypes.string
}

Col.defaultProps = {node: 'div'};

export default Col;
