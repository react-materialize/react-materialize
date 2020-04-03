import * as React from "react";
import { AnyFn, SharedBasic } from "./utils";

export type SideNavEdge = "left" | "right";

export interface SideNavOptions {
  edge?: SideNavEdge;
  draggable?: boolean;
  inDuration?: number;
  outDuration?: number;
  onOpenStart?: AnyFn;
  onOpenEnd?: AnyFn;
  onCloseStart?: AnyFn;
  onCloseEnd?: AnyFn;
  preventScrolling?: boolean;
}

export interface SideNavProps extends SharedBasic {
  id?: string;
  options?: SideNavOptions;
  trigger?: React.ReactNode;
  fixed?: boolean;
}

/**
 * React Materialize: SideNav
 */
declare const SideNav: React.FC<SideNavProps>;

export default SideNav;
