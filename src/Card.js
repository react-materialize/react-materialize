var React = require('react'),
    joinClasses = require('react/lib/joinClasses');

var cx = React.addons.classSet;

var Card = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    textClassName: React.PropTypes.string
  },

  render() {
    var {title, header, className, textClassName, actions, children, ...props} = this.props;
    var classes = { card: true };
    return (
      <div {...props}
        className={joinClasses(className, cx(classes))} >
        {header}
        <div className={joinClasses('card-content', textClassName)}>
          {title ? this.renderTitle(title) : null}
          <p>{children}</p>
        </div>
        <div className='card-action'>
          {actions}
        </div>
      </div>
    );
  },
  renderTitle(title) {
    return <span className='card-title'>{title}</span>;
  }
});

module.exports = Card;
