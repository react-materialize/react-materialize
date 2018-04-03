import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class CollectionItem extends Component {
  render() {
    const { active, children, className, ...other } = this.props;

    const classes = {
      'collection-item': true,
      active: active
    };

    let C = this.props.href ? 'a' : 'li';

    return (
      <C {...other} className={cx(className, classes)}>
        {children}
      </C>
    );
  }
}

CollectionItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};

export default CollectionItem;
