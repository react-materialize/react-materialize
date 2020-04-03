import * as React from 'react';
import { SharedBasic } from './utils';

export interface FooterProps extends SharedBasic {
  copyrights?: string;
  links?: React.ReactElement;
  moreLinks?: React.ReactElement;
};

/**
 * React Materialize: Footer
 */
declare const Footer: React.FC<FooterProps>

export default Footer;
