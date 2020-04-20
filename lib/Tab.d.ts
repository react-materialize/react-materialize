import * as React from "react";

export interface TabProps {
  title: string;
  idx?: string;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  tabWidth?: number;
}

/**
 * React Materialize: Tab
 */
declare const Tab: React.FC<TabProps>;

export default Tab;
