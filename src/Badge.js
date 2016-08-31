import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class Badge extends Component {
  render () {
    let {
      className, newIcon, children, ...props
    } = this.props;

    let classes = {
      badge: true,
      'new': newIcon
    };

    return (
      <span className={cx(classes, className)} {...props}>
        {children}
      </span>
    );
  }
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Add the <b>new</b> class name
   */
  newIcon: PropTypes.bool
};

export default Badge;
