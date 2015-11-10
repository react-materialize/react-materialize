import React from 'react';
import cx from 'classnames';

class Badge extends React.Component {
  render() {
    let classes = {
      badge: true,
      new: this.props.new || false
    };

    return (
      <span className={cx(classes)}>
        {this.props.children}
      </span>
    );
  }
}

Badge.propTypes = {
  new: React.PropTypes.bool
};

export default Badge;
