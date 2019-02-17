import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  getNodeType(children) {
    return React.Children.toArray(children).some(child => child.props.href)
      ? 'div'
      : 'ul';
  }

  renderHeader() {
    let header;
    if (React.isValidElement(this.props.header)) {
      header = this.props.header;
    } else {
      header = <h4>{this.props.header}</h4>;
    }
    return <li className="collection-header">{header}</li>;
  }

  render() {
    const { children, header, className, ...other } = this.props;
    const C = this.getNodeType(children);

    return (
      <C
        {...other}
        className={cx('collection', { 'with-header': !!header }, className)}
      >
        {header ? this.renderHeader() : null}
        {children}
      </C>
    );
  }
}

Collection.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string
};

export default Collection;
