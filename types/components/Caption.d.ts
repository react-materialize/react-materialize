import * as React from "react";
import { SharedBasic } from "./utils";

export type CaptionPlacement = "left" | "center" | "right";

export interface CaptionProps extends SharedBasic {
  placement?: CaptionPlacement;
}

/**
 * React Materialize: Caption
 */
declare const Caption: React.FC<CaptionProps>;

export default Caption;
