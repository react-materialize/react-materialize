import * as React from "react";
import { SharedBasic } from "./utils";

export interface TableProps extends SharedBasic {
  centered?: boolean;
  hoverable?: boolean;
  responsive?: boolean;
  striped?: boolean;
}

/**
 * React Materialize: Table
 */
declare const Table: React.FC<TableProps>;

export default Table;
