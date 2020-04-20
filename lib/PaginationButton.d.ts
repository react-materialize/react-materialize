import * as React from "react";

export interface PaginationButtonProps {
  active?: boolean;
  children?: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  onSelect?: (event: React.MouseEvent<HTMLLIElement>) => any;
}

/**
 * React Materialize: PaginationButton
 */
declare const PaginationButton: React.FC<PaginationButtonProps>;

export default PaginationButton;
