import React from 'react';
import cx from 'classnames';

import constants from './constants';

class Col extends React.Component {
  render() {
    let {node, offset, className, children, ...props} = this.props;
    let C = node;
    let classes = {col: true};
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
  /**
   * The node to be used for the column
   * @default div
   */
  node: React.PropTypes.node.isRequired,
  /**
   * Columns for small size screens
   */
  s: React.PropTypes.number,
  /**
   * Columns for middle size screens
   */
  m: React.PropTypes.number,
  /**
   * Columns for large size screens
   */
  l: React.PropTypes.number,
  /**
   * To offset, simply add s2 to the class where s signifies the screen
   * class-prefix (s = small, m = medium, l = large) and the number after
   * is the number of columns you want to offset by.
   */
  offset: React.PropTypes.string
}

Col.defaultProps = {node: 'div'};

export default Col;
