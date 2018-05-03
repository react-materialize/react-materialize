import React, { Component } from 'react';
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
    return (
      <span
        className={cx('card-title', 'grey-text', 'text-darken-4', {
          activator: reveal
        })}
      >
        {title}
        {reveal && <Icon right>more_vert</Icon>}
      </span>
    );
  }

  renderReveal(title, reveal) {
    return (
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <Icon right>close</Icon>
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
      <React.Fragment>
        {this.renderContent(title, reveal, textClassName, children)}
        {this.renderReveal(title, reveal)}
        {actions && this.renderAction(actions)}
      </React.Fragment>
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
  horizontal: PropTypes.bool
};

export default Card;
