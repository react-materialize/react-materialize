import React from 'react';
import cx from 'classnames';

class PaginationButton extends React.Component {
  render() {
    let {active, disabled, children, href, className, onSelect, ...props} = this.props;
    let classes = {
      'waves-effect': true,
      disabled,
      active,
    };
    return (
      <li className={cx(classes, className)} {...props} onClick={onSelect}>
        <a href={href}>{children}</a>
      </li>
    );
  }
}

PaginationButton.propTypes = {
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  onSelect: React.PropTypes.func,
};

PaginationButton.defaultProps = {
  active: false,
  disabled: false,
  href: '#!',
};

export default PaginationButton;
