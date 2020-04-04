import * as React from "react";

export type PreloaderSize = "big" | "small" | "medium";
export type PreloaderColor = "blue" | "red" | "yellow" | "green";

export interface PreloaderProps {
  className?: string;
  active?: boolean;
  size?: PreloaderSize;
  color?: PreloaderColor;
  flashing?: boolean;
}

/**
 * React Materialize: Preloader
 */
declare const Preloader: React.FC<PreloaderProps>;

export default Preloader;
