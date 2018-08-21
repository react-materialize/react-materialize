import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  render() {
    const { children, header, className } = this.props;

    let C = 'ul';
    React.Children.forEach(children, child => {
      if (child.props.href) {
        C = 'div';
      }
    });
    return (
      <C className={cx('collection', { 'with-header': !!header }, className)}>
        {header ? this.renderHeader() : null}
        {children}
      </C>
    );
  }

  renderHeader() {
    let header;
    if (this.props.header) {
      if (React.isValidElement(this.props.header)) {
        header = this.props.header;
      } else {
        header = <h4>{this.props.header}</h4>;
      }
      return <li className="collection-header">{header}</li>;
    }
  }
}

Collection.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string
};

export default Collection;
