import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

const renderTitle = (title, reveal) => (
  <span className={cx('card-title', 'grey-text', 'text-darken-4', { 'activator': reveal })}>
    {title}
    {reveal && <Icon right>more_vert</Icon>}
  </span>
);

const renderReveal = (title, reveal) => (
  <div className='card-reveal'>
    <span className='card-title grey-text text-darken-4'>{title}<Icon right>close</Icon></span>
    {reveal}
  </div>
);

const renderAction = (actions) => (
  <div className='card-action'>{actions}</div>
);

const Card = ({
  title,
  header,
  className,
  textClassName,
  actions,
  reveal,
  children,
  ...props
}) => {
  const classes = { card: true };

  return (
    <div {...props} className={cx(className, classes)}>
      {header}
      <div className={cx('card-content', textClassName)}>
        {title && renderTitle(title, reveal)}
        <div>{children}</div>
      </div>
      {renderReveal(title, reveal)}
      {actions && renderAction(actions)}
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
  actions: PropTypes.arrayOf(PropTypes.element)
};

export default Card;
