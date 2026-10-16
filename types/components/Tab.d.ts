import * as React from 'react';

export interface TabProps {
  children?: React.ReactNode;
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
