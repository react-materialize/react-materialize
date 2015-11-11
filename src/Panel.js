import React from 'react';
import cx from 'classnames';

class Panel extends React.Component {
    render() {
      let classes = {
        'card-panel': true
      };
      return (
            <div className={cx(this.props.className, classes)} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

export default Panel;
