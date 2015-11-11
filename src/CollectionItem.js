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
    let C = this.isAnchor() ? 'a' : 'li';
    return (
      <C className={cx(classes)}>
        {this.props.children}
      </C>
    );
  }
  isAnchor() {
    return this.props.href !== null;
  }
}

CollectionItem.propTypes = {
  active: React.PropTypes.bool,
  href: React.PropTypes.string
};

export default CollectionItem;
