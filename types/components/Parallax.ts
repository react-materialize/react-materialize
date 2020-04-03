import * as React from "react";
import { SharedBasic } from "./utils";

export interface ParallaxOptions {
  responsiveThreshold?: number;
}

export interface ParallaxProps extends SharedBasic {
  options?: ParallaxOptions;
  image?: React.ReactNode;
}

/**
 * React Materialize: Parallax
 */
declare const Parallax: React.FC<ParallaxProps>;

export default Parallax;
