import React, { Component, Fragment, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

class Card extends Component {
  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderReveal = this.renderReveal.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderAll = this.renderAll.bind(this);
  }

  renderTitle(title, reveal) {
    const { revealIcon } = this.props;
    return (
      <span
        className={cx('card-title', {
          activator: reveal
        })}
      >
        {title}
        {reveal && revealIcon}
      </span>
    );
  }

  renderReveal(title, reveal) {
    const { closeIcon } = this.props;

    return (
      <div className="card-reveal">
        <span className="card-title">
          {title}
          {cloneElement(closeIcon, { right: true })}
        </span>
        {reveal}
      </div>
    );
  }

  renderAction(actions) {
    return <div className="card-action">{actions}</div>;
  }

  renderContent(title, reveal, textClassName, children) {
    return (
      <div className={cx('card-content', textClassName)}>
        {title && this.renderTitle(title, reveal)}
        <div>{children}</div>
      </div>
    );
  }

  renderAll(title, reveal, textClassName, children, actions) {
    return (
      <Fragment>
        {this.renderContent(title, reveal, textClassName, children)}
        {this.renderReveal(title, reveal)}
        {actions && this.renderAction(actions)}
      </Fragment>
    );
  }

  render() {
    const {
      title,
      header,
      className,
      textClassName,
      actions,
      reveal,
      children,
      horizontal,
      ...other
    } = this.props;

    delete other.revealIcon;
    delete other.closeIcon;

    const classes = {
      card: true,
      horizontal: horizontal
    };

    return (
      <div {...other} className={cx(className, classes)}>
        {header}
        {horizontal ? (
          <div className="card-stacked">
            {this.renderAll(title, reveal, textClassName, children, actions)}
          </div>
        ) : (
          this.renderAll(title, reveal, textClassName, children, actions)
        )}
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  textClassName: PropTypes.string,
  reveal: PropTypes.element,
  header: PropTypes.element,
  // The buttons to be displayed at the action area
  actions: PropTypes.arrayOf(PropTypes.element),
  horizontal: PropTypes.bool,
  closeIcon: PropTypes.node,
  revealIcon: PropTypes.node
};

Card.defaultProps = {
  closeIcon: <Icon>close</Icon>,
  revealIcon: <Icon>more_vert</Icon>
};

export default Card;
