import React, { Fragment, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

const Card = ({
  title,
  header,
  className,
  textClassName,
  actions,
  reveal,
  children,
  horizontal,
  ...other
}) => {
  const renderTitle = (title, reveal) => {
    const { revealIcon } = other;

    return (
      <span
        className={cx('card-title', {
          activator: reveal
        })}
      >
        {title}
        {reveal && { revealIcon }}
      </span>
    );
  };

  const renderReveal = (title, reveal) => {
    const { closeIcon } = other;

    return (
      <div className="card-reveal">
        <span className="card-title">
          {title}
          {cloneElement(closeIcon, { right: true })}
        </span>
        {reveal}
      </div>
    );
  };

  const renderAction = actions => {
    return <div className="card-action">{actions}</div>;
  };

  const renderContent = (title, reveal, textClassName, children) => {
    return (
      <div className={cx('card-content', textClassName)}>
        {title && renderTitle(title, reveal)}
        <div>{children}</div>
      </div>
    );
  };

  const renderAll = (title, reveal, textClassName, children, actions) => {
    return (
      <Fragment>
        {renderContent(title, reveal, textClassName, children)}
        {renderReveal(title, reveal)}
        {actions && renderAction(actions)}
      </Fragment>
    );
  };

  const classes = {
    card: true,
    horizontal: horizontal
  };

  return (
    <div {...other} className={cx(className, classes)}>
      {header}
      {horizontal ? (
        <div className="card-stacked">
          {renderAll(title, reveal, textClassName, children, actions)}
        </div>
      ) : (
        renderAll(title, reveal, textClassName, children, actions)
      )}
    </div>
  );
};

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
