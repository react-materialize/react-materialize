import * as React from "react";
import { AnyFn, SharedBasic } from "./utils";

export type NavbarAlignment = "left" | "right";

export interface NavbarOptions {
  edge?: NavbarAlignment;
  draggable?: boolean;
  inDuration?: number;
  outDuration?: number;
  onOpenStart?: AnyFn;
  onOpenEnd?: AnyFn;
  onCloseStart?: AnyFn;
  onCloseEnd?: AnyFn;
  preventScrolling?: boolean;
}

export interface NavbarProps extends SharedBasic {
  menuIcon: React.ReactNode;
  id?: string;
  brand?: React.ReactNode;
  extendWith?: React.ReactNode;
  search?: boolean;
  sidenav?: React.ReactNode;
  alignLinks?: NavbarAlignment;
  centerLogo?: boolean;
  centerChildren?: boolean;
  fixed?: boolean;
  options?: NavbarOptions;
}

/**
 * React Materialize: Navbar
 */
declare const Navbar: React.FC<NavbarProps>;

export default Navbar;
