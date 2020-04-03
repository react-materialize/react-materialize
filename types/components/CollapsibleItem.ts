import * as React from "react";
import { SharedBasic } from "./utils";

export interface CollapsibleItemProps extends SharedBasic {
  active?: boolean;
  href?: string;
}

/**
 * React Materialize: CollapsibleItem
 */
declare const CollapsibleItem: React.FC<CollapsibleItemProps>;

export default CollapsibleItem;
