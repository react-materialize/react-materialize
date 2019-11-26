import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './Icon';
import PaginationButton from './PaginationButton';

const Pagination = ({
  children,
  className,
  items,
  maxButtons = items,
  leftBtn,
  rightBtn,
  activePage,
  onSelect,
  ...props
}) => {
  const [currentlyActivePage, setCurrentlyActivePage] = useState(
    activePage > 0 && activePage <= items ? activePage : 1
  );

  useEffect(() => {
    setCurrentlyActivePage(activePage);
  }, [activePage]);

  const _onClick = i => () => {
    if (i > 0 && i <= items) {
      if (onSelect) {
        onSelect(i);
      }
      setCurrentlyActivePage(i);
    }
  };

  const renderButtons = () => {
    if (children) return children;

    const buttonsCount = Math.min(maxButtons, items);

    const maxPos = items - buttonsCount;
    const halfButtons = parseInt(buttonsCount / 2, 10);

    let hiddenPagesBefore = currentlyActivePage - halfButtons;
    if (hiddenPagesBefore > maxPos) {
      hiddenPagesBefore = maxPos + 1;
    }

    let from = Math.max(hiddenPagesBefore, 1);
    let to = Math.min(items, from + maxButtons - 1);

    const buttons = [
      <PaginationButton
        disabled={currentlyActivePage === 1}
        key={'pagination-0'}
        onSelect={_onClick(currentlyActivePage - 1)}
      >
        {leftBtn}
      </PaginationButton>
    ];

    for (let i = from; i <= to; i++) {
      buttons.push(
        <PaginationButton
          active={i === currentlyActivePage}
          key={`pagination-${i}`}
          onSelect={_onClick(i)}
        >
          {i}
        </PaginationButton>
      );
    }

    buttons.push(
      <PaginationButton
        key={`pagination-${items + 1}`}
        disabled={currentlyActivePage === items}
        onSelect={_onClick(currentlyActivePage + 1)}
      >
        {rightBtn}
      </PaginationButton>
    );

    return buttons;
  };

  return (
    <ul className={cx('pagination', className)} {...props}>
      {renderButtons()}
    </ul>
  );
};

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: PropTypes.number.isRequired,
  /**
   * The initial activePage
   */
  activePage: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  maxButtons: PropTypes.number,
  onSelect: PropTypes.func,
  leftBtn: PropTypes.node,
  rightBtn: PropTypes.node
};

Pagination.defaultProps = {
  activePage: 1,
  items: 10,
  leftBtn: <Icon>chevron_left</Icon>,
  rightBtn: <Icon>chevron_right</Icon>
};

export default Pagination;
