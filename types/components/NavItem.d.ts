import * as React from "react";
import { AnyFn } from "./utils";

export interface NavItemProps {
  divider?: boolean;
  href?: string;
  onClick?: AnyFn;
  className?: string;
  children?: string | React.ReactNode;
}

/**
 * React Materialize: NavItem
 */
declare const NavItem: React.FC<NavItemProps>;

export default NavItem;
