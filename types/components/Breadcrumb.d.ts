import * as React from "react";
import { SharedBasic } from "./utils";

export interface BreadcrumbProps extends SharedBasic {
  cols?: number;
}

/**
 * React Materialize: Breadcrumb
 */
declare const Breadcrumb: React.FC<BreadcrumbProps>;

export default Breadcrumb;
