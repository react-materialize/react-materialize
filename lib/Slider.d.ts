import * as React from "react";
import { SharedBasic } from "./utils";

export interface SliderOptions {
  indicators?: boolean;
  interval?: number;
  duration?: number;
  height?: number;
}

export interface SliderProps extends SharedBasic {
  fullscreen?: boolean;
  options?: SliderOptions;
}

/**
 * React Materialize: Slider
 */
declare const Slider: React.FC<SliderProps>;

export default Slider;
