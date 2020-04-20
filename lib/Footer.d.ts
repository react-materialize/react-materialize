import * as React from "react";
import { SharedBasic } from "./utils";

export interface FooterProps extends SharedBasic {
  copyrights?: string;
  links?: React.ReactNode;
  moreLinks?: React.ReactNode;
}

/**
 * React Materialize: Footer
 */
declare const Footer: React.FC<FooterProps>;

export default Footer;
