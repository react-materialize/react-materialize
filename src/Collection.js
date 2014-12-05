var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Collection = React.createClass({
  propTypes: {
    header: React.PropTypes.node
  },
  render() {
    var classes = {
      collection: true,
      'with-header': !!this.props.header
    };
    return (
      <ul className={cx(classes)}>
        {this.renderHeader()}
        {this.props.children}
      </ul>
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
