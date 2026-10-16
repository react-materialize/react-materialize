import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from './Icon';
import PaginationButton from './PaginationButton';

const clampPage = (page, items) => (page > 0 && page <= items ? page : 1);

const defaultLeftBtn = <Icon>chevron_left</Icon>;
const defaultRightBtn = <Icon>chevron_right</Icon>;

const Pagination = ({
  items = 10,
  className,
  children,
  maxButtons = items,
  leftBtn = defaultLeftBtn,
  rightBtn = defaultRightBtn,
  onSelect,
  activePage: activePageProp = 1
}) => {
  const [activePage, setActivePage] = useState(activePageProp);

  useEffect(() => {
    setActivePage(activePageProp);
  }, [activePageProp]);

  // Out-of-range values (from props or a shrinking `items`) fall back to page 1.
  const currentPage = clampPage(activePage, items);

  const onClick = useCallback(
    pageIdx => {
      if (pageIdx > 0 && pageIdx <= items) {
        if (onSelect) onSelect(pageIdx);
        setActivePage(pageIdx);
      }
    },
    [onSelect, items]
  );

  const renderButtons = useMemo(() => {
    if (children) return children;

    const buttonsCount = Math.min(maxButtons, items);

    const maxPos = items - buttonsCount;
    const halfButtons = parseInt(buttonsCount / 2, 10);

    let hiddenPagesBefore = currentPage - halfButtons;
    if (hiddenPagesBefore > maxPos) {
      hiddenPagesBefore = maxPos + 1;
    }

    const from = Math.max(hiddenPagesBefore, 1);
    const to = Math.min(items, from + maxButtons - 1);

    const buttons = [
      <PaginationButton
        disabled={currentPage === 1}
        key={'pagination-0'}
        onSelect={() => onClick(currentPage - 1)}
      >
        {leftBtn}
      </PaginationButton>
    ];

    for (let i = from; i <= to; i++) {
      buttons.push(
        <PaginationButton
          active={i === currentPage}
          key={`pagination-${i}`}
          onSelect={() => onClick(i)}
        >
          {i}
        </PaginationButton>
      );
    }

    buttons.push(
      <PaginationButton
        key={`pagination-${items + 1}`}
        disabled={currentPage === items}
        onSelect={() => onClick(currentPage + 1)}
      >
        {rightBtn}
      </PaginationButton>
    );

    return buttons;
  }, [children, maxButtons, items, currentPage, onClick, leftBtn, rightBtn]);

  return <ul className={cx('pagination', className)}>{renderButtons}</ul>;
};

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: PropTypes.number,
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

export default Pagination;
