import * as React from "react";
import { Responsive, SharedBasic } from "./utils";

export interface ColProps extends SharedBasic, Responsive {
  node?: React.ReactNode;
  offset?: string;
  push?: string;
  pull?: string;
}

/**
 * React Materialize: Col
 */
declare const Col: React.FC<ColProps>;

export default Col;
