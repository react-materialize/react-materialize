import * as React from "react";
import { SharedBasic } from "./utils";

export interface CollapsibleItemProps extends SharedBasic {
  expanded?: boolean;
  node?: React.ReactNode;
  header: any;
  icon?: React.ReactNode;
  iconClassName?: string;
  onSelect?: (eventKey: any) => any;
  eventKey?: any;
}

/**
 * React Materialize: CollapsibleItem
 */
declare const CollapsibleItem: React.FC<CollapsibleItemProps>;

export default CollapsibleItem;
