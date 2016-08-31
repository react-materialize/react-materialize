import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class CollectionItem extends Component {
  constructor (props) {
    super(props);
    this.isAnchor = this.isAnchor.bind(this);
  }
  render () {
    let {active, className} = this.props;

    let classes = {
      'collection-item': true,
      active: active
    };

    if (this.isAnchor()) {
      return (
        <a className={cx(className, classes)} href={this.props.href}>
         {this.props.children}
        </a>
      );
    }

    return (
      <li className={cx(className, classes)}>
        {this.props.children}
      </li>
    );
  }
  isAnchor () {
    return typeof this.props.href !== 'undefined';
  }
}

CollectionItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};

export default CollectionItem;
