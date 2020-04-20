import * as React from "react";
import { SharedBasic } from "./utils";

export interface SlideProps extends SharedBasic {
  image: React.ReactNode;
}

/**
 * React Materialize: Slide
 */
declare const Slide: React.FC<SlideProps>;

export default Slide;
