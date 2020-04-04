import * as React from "react";
import { SharedBasic } from "./utils";

export interface SectionProps extends SharedBasic {
  node?: React.ReactNode;
  id?: string;
}

/**
 * React Materialize: Section
 */
declare const Section: React.FC<SectionProps>;

export default Section;
