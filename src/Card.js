var React = require('react'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var Card = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string,
    textClassName: React.PropTypes.string
  },

  render() {
    var {title, className, textClassName, image, actions, children, ...props} = this.props;
    var cardImage = null;
    var classes = { card: true };
    if (image) {
      cardImage = <img src={image} />;
    }

    return (
      <div {...props}
        className={joinClasses(className, cx(classes))} >
        <div className='card-image'>
          {cardImage}
          <span className='card-title'>{title}</span>
        </div>
        <div className={joinClasses('card-content', textClassName)}>
          <p>{children}</p>
        </div>
        <div className='card-action'>
          {actions}
        </div>
      </div>
    );
  }
});

module.exports = Card;
