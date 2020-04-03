import * as React from 'react';
import { SharedBasic, AnyFn } from './utils';

export type NavbarAlignment = 'left' | 'right';

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
  menuIcon: React.ReactElement;
  id?: string;
  brand?: React.ReactElement;
  extendWith?: React.ReactElement;
  search?: boolean;
  sidenav?: React.ReactElement;
  alignLinks?: NavbarAlignment;
  centerLogo?: boolean;
  centerChildren?: boolean;
  fixed?: boolean;
  options?: NavbarOptions;
};

/**
 * React Materialize: Navbar
 */
declare const Navbar: React.FC<NavbarProps>

export default Navbar;
