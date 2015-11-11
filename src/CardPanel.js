import React from 'react';
import cx from 'classnames';

class CardPanel extends React.Component {
  render() {
    let classes = {
      'card-panel': true,
      'teal': true
    };
    let {className, children, ...props} = this.props;
    return (
      <div className={cx(classes, className)}>
        <span className="white-text">{children}</span>
      </div>
    );
  }
}

export default CardPanel;
