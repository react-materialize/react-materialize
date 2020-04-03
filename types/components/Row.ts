import * as React from "react";
import { SharedBasic } from "./utils";

export interface RowProps extends SharedBasic {
  node?: React.ReactNode;
}

/**
 * React Materialize: Row
 */
declare const Row: React.FC<RowProps>;

export default Row;
