import * as React from "react";

interface TabsOptions {
  duration: number;
  onShow: () => void;
  swipeable: boolean;
  responsiveThreshold: number;
}

export interface TabsProps {
  options?: TabsOptions;
  className?: string;
  defaultValue?: string;
  onChange?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * React Materialize: Tabs
 */
declare const Tabs: React.FC<TabsProps>;

export default Tabs;
