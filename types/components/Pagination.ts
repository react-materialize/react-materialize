import * as React from "react";

export interface PaginationProps {
  activePage?: number;
  items?: number;
  leftBtn?: React.ReactNode;
  rightBtn?: React.ReactNode;
}

/**
 * React Materialize: Pagination
 */
declare const Pagination: React.FC<PaginationProps>;

export default Pagination;
