import * as React from 'react';

export interface SideNavItemProps {
  href?: string;
  waves?: boolean;
  children?: string;
  divider?: boolean;
  subheader?: boolean;
  userView?: boolean;
  icon?: React.ReactNode;
  user?: any; // TODO use UserShape
};

/**
 * React Materialize: SideNavItem
 */
declare const SideNavItem: React.FC<SideNavItemProps>

export default SideNavItem;
