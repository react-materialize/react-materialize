import * as React from "react";
import { UserViewProps } from "./UserView";

export interface SideNavItemProps {
  href?: string;
  waves?: boolean;
  children?: string;
  divider?: boolean;
  subheader?: boolean;
  userView?: boolean;
  icon?: React.ReactNode;
  user?: UserViewProps;
}

/**
 * React Materialize: SideNavItem
 */
declare const SideNavItem: React.FC<SideNavItemProps>;

export default SideNavItem;
