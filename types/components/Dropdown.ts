import * as React from "react";
import { AnyFn, SharedBasic } from "./utils";

export type DropdownAlignment = "left" | "right";

export interface DropdownOptions {
  alignment?: DropdownAlignment;
  autoTrigger?: boolean;
  constrainWidth?: boolean;
  container?: React.ReactNode;
  coverTrigger?: boolean;
  closeOnClick?: boolean;
  hover?: boolean;
  inDuration?: number;
  outDuration?: number;
  onOpenStart?: AnyFn;
  onOpenEnd?: AnyFn;
  onCloseStart?: AnyFn;
  onCloseEnd?: AnyFn;
}

export interface DropdownProps extends SharedBasic {
  id?: string;
  options?: DropdownOptions;
  trigger: React.ReactNode;
}

/**
 * React Materialize: Dropdown
 */
declare const Dropdown: React.FC<DropdownProps>;

export default Dropdown;
