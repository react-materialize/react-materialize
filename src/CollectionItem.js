import React from 'react';
import cx from 'classnames';

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.isAnchor = this.isAnchor.bind(this);
  }
  render() {
    let classes = {
      'collection-item': true,
      active: this.props.active
    };

    if (this.isAnchor()) {
      return (
        <a className={cx(classes)} href={this.props.href}>
         {this.props.children}
        </a>
      );
    }

    return (
      <li className={cx(classes)}>
        {this.props.children}
      </li>
    );

  }
  isAnchor() {
    return typeof this.props.href !== 'undefined';
  }
}

CollectionItem.propTypes = {
  active: React.PropTypes.bool,
  href: React.PropTypes.string
};

export default CollectionItem;
