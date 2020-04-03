import * as React from "react";
import { MaterialColor } from "./utils";

export interface SpinnerProps {
  className?: string;
  color?: MaterialColor;
  only?: boolean;
}

/**
 * React Materialize: Spinner
 */
declare const Spinner: React.FC<SpinnerProps>;

export default Spinner;
