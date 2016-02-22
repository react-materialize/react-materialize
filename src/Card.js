import React from 'react';
import cx from 'classnames';
import Icon from './Icon';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
  }

  render() {
    let {title, header, className, textClassName, actions, reveal, children, ...props} = this.props;
    let classes = { card: true };
    return (
      <div {...props}
        className={cx(className, classes)} >
        {header}
        <div className={cx('card-content', textClassName)}>
          {title ? this.renderTitle(title, reveal) : null}
          <div>{children}</div>
        </div>
        {this.renderReveal(title, reveal)}
        {actions ? this.renderAction(actions) : null}
      </div>
    );
  }

  renderTitle(title, reveal) {
    let revealIcon = null;
    if (reveal) {
      revealIcon = <Icon right>more_vert</Icon>;
    }
    let classes = {
      'card-title': true,
      'grey-text': true,
      'text-darken-4': true,
      'activator': reveal
    };
    return (
      <span className={cx(classes)}>
        {title}
        {revealIcon}
      </span>
    );
  }

  renderReveal(title, reveal) {
    return (
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{title}<Icon right>close</Icon></span>
        {reveal}
      </div>
    );
  }

  renderAction(actions) {
    return <div className='card-action'> {actions} </div>;
  }
}

Card.propTypes = {
  title: React.PropTypes.string,
  textClassName: React.PropTypes.string,
  reveal: React.PropTypes.element,
  header: React.PropTypes.element,
  // The buttons to be displayed at the action area
  actions: React.PropTypes.arrayOf(React.PropTypes.element),
}

export default Card;
