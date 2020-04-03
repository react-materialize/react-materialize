import * as React from 'react';
import { SharedBasic } from './utils';

export interface BadgeProps extends SharedBasic {
  newIcon?: React.ReactNode;
  caption?: string;
}

/**
 * React Materialize: Badge
 */
declare const Badge: React.FC<BadgeProps>

export default Badge;
