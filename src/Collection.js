import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Collection = ({ children, header, className, ...other }) => {
  const getNodeType = () => {
    return React.Children.toArray(children).some(child => child.props.href)
      ? 'div'
      : 'ul';
  };

  const renderHeader = () => {
    let _header;
    if (React.isValidElement(header)) {
      _header = header;
    } else {
      _header = <h4>{header}</h4>;
    }
    return <li className="collection-header">{_header}</li>;
  };

  const C = getNodeType();

  return (
    <C
      {...other}
      className={cx('collection', { 'with-header': !!header }, className)}
    >
      {header ? renderHeader() : null}
      {children}
    </C>
  );
};

Collection.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string
};

export default Collection;
