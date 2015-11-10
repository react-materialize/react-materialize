import React from 'react';
import cx from 'classnames';

class PaginationButton extends React.Component {
    render() {
      var classes = {
        'waves-effect': true
      };
      classes['active'] = this.props.active;
      return (
            <li className={cx(classes)}><a href="#!">{this.props.children}</a></li>
        );
    }
}

export default PaginationButton;
