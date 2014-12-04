var React = require('react'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Card = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string
  },

  render() {
    return (
      <div {...this.props}
        className={joinClasses(this.props.className, cx(classes))} >
        <div className='card-image'>
          <img src={this.props.image} />
          <span className='card-title'>{this.props.title}</span>
        </div>
        <div className='card-content'>
          {this.props.children}
        </div>
        <div className='card-action'>
          {actions}
        </div>
      </div>
    );
  }
});
