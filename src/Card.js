import React, { Fragment, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ condition, children }) =>
  condition ? (
    <div className="card-stacked">{children}</div>
  ) : (
    <Fragment>{children}</Fragment>
  );

const Card = ({
  title,
  header,
  className,
  textClassName,
  actions,
  reveal,
  children,
  horizontal,
  closeIcon,
  revealIcon,
  ...other
}) => {
  const classes = {
    card: true,
    horizontal: horizontal
  };

  return (
    <div {...other} className={cx(className, classes)}>
      {header}
      <Wrapper condition={horizontal}>
        <div className={cx('card-content', textClassName)}>
          {title && (
            <span className={cx('card-title', { activator: reveal })}>
              {title}
              {reveal && cloneElement(revealIcon, { right: true })}
            </span>
          )}
          <div>{children}</div>
        </div>

        <div className="card-reveal">
          <span className="card-title">
            {title}
            {cloneElement(closeIcon, { right: true })}
          </span>
          {reveal}
        </div>

        {actions && <div className="card-action">{actions}</div>}
      </Wrapper>
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
  /*
   * @default <Icon>close</Icon>
   */
  closeIcon: PropTypes.node,
  /*
   * @default <Icon>more_vert</Icon>
   */
  revealIcon: PropTypes.node
};

Card.defaultProps = {
  closeIcon: <Icon>close</Icon>,
  revealIcon: <Icon>more_vert</Icon>
};

export default Card;
