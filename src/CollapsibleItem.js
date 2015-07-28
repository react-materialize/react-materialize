var React = require('react/addons'),
    joinClasses = require('react/lib/joinClasses'),
    Icon = require('./Icon');

var cx = React.addons.classSet;
var CollapsibleItem = React.createClass({
  propTypes: {
    header: React.PropTypes.string.isRequired,
    eventKey: React.PropTypes.any,
    mdi: React.PropTypes.string,
    onSelect: React.PropTypes.func
  },

  getInitialState() {
    return {
      expanded: this.props.expanded
    };
  },

  componentWillReceiveProps(newProps) {
    if (this.props.expanded !== newProps.expanded) {
      this.setState({expanded: newProps.expanded});
    }
  },

  render() {
    var {header, mdi, children, ...props} = this.props;

    return (
      <li {...props}>
        <div className='collapsible-header' onClick={this.handleClick}>
          {mdi ? this.renderIcon(mdi) : null}
          {header}
        </div>
        {this.state.expanded ? this.renderBody() : null}
      </li>
    );
  },

  handleClick() {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.eventKey);
    } else {
      this.setState({expanded: !this.state.expanded});
    }
  },

  renderBody() {
    var style = {display: 'block'};
    return (
      <div className='collapsible-body' style={style}>
        <p>{this.props.children}</p>
      </div>
    );
  },

  renderIcon(mdi) {
    return <Icon mdi={mdi} />;
  }
});

module.exports = CollapsibleItem;
