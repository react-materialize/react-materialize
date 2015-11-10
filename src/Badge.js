import React from 'react';
import cx from 'classnames';

class Badge extends React.Component {
  render() {
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
  // add the "new" class name
  newIcon: React.PropTypes.bool
};

export default Badge;

