import React from 'react';
import cx from 'classnames';

import constants from './constants';

class Col extends React.Component {
  render() {
    var C = this.props.node;
    var classes = {col: true};
    constants.SIZES.forEach(s => {
      if (this.props[s]) {
        classes[s + this.props[s]] = true;
      }
    });

    if (this.props.offset) {
      this.props.offset.split(' ').forEach(offset => {
        classes['offset-' + offset] = true;
      });
    }
    return (
      <C {...this.props} className={cx(classes)}>
        {this.props.children}
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
