import React from 'react';
import cx from 'classnames';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  render() {
    let classes = {
      collection: true,
      'with-header': !!this.props.header
    };
    let C = 'ul';
    React.Children.forEach(this.props.children, child => {
      if (child.props.href) {
        C = 'div';
      }
    });
    return (
      <C className={cx(classes)}>
        {this.props.header ? this.renderHeader() : null}
        {this.props.children}
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
      return <li className='collection-header'>{header}</li>;
    }
  }
}

Collection.propTypes = {
  header: React.PropTypes.node,
};

export default Collection;
