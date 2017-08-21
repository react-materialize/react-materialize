import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

class Card extends Component {
  constructor (props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
  }

  render () {
    let {title, header, className, textClassName, horizontal, actions, reveal, children, ...props} = this.props;
    let classes = { card: true };

    let content = (
      <div>
        <div className={cx('card-content', textClassName)}>
          {title ? this.renderTitle(title, reveal) : null}
          <div>{children}</div>
        </div>
        {this.renderReveal(title, reveal)}
        {actions ? this.renderAction(actions) : null}
      </div>);
    if (horizontal) {
      content = <div className='card-stacked'>{content}</div>;
    }

    return (
      <div {...props}
        className={cx(className, classes, {horizontal})} >
        {header}
        {content}
      </div>
    );
  }

  renderTitle (title, reveal) {
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

  renderReveal (title, reveal) {
    return (
      <div className='card-reveal'>
        <span className='card-title grey-text text-darken-4'>{title}<Icon right>close</Icon></span>
        {reveal}
      </div>
    );
  }

  renderAction (actions) {
    return <div className='card-action'>{actions}</div>;
  }
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  horizontal: PropTypes.bool,
  textClassName: PropTypes.string,
  reveal: PropTypes.element,
  header: PropTypes.element,
  // The buttons to be displayed at the action area
  actions: PropTypes.arrayOf(PropTypes.element)
};

export default Card;
