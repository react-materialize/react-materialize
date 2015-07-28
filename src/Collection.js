var React = require('react/addons'),
    joinClasses = require('react/lib/joinClasses');

var cx = React.addons.classSet;
var Collection = React.createClass({
  propTypes: {
    header: React.PropTypes.node
  },
  render() {
    var classes = {
      collection: true,
      'with-header': !!this.props.header
    };
    var C = 'ul';
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
  },
  renderHeader() {
    var header;
    if (this.props.header) {
      if (React.isValidElement(this.props.header)) {
        header = this.props.header;
      } else {
        header = <h4>{this.props.header}</h4>;
      }
      return <li className='collection-header'>{header}</li>;
    }
  }
});

module.exports = Collection;
