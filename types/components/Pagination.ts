import * as React from 'react';

export interface PaginationProps {
  activePage?: number;
  items?: number;
  leftBtn?: React.ReactElement;
  rightBtn?: React.ReactElement;
};

/**
 * React Materialize: Pagination
 */
declare const Pagination: React.FC<PaginationProps>

export default Pagination;
