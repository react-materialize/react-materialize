import * as React from 'react';
import { MaterialColor, Positions, SharedBasic } from './utils';

export type ModalType = 'close' | 'confirm';

export interface FabOptions {
  direction?: Positions;
  hoverEnabled?: boolean;
  toolbarEnabled?: boolean;
}

export interface TooltipOptions {
  exitDelay?: number;
  enterDelay?: number;
  html?: string;
  margin?: number;
  inDuration?: number;
  outDuration?: number;
  transitionMovement?: number;
  delay?: number;
  position?: Positions;
}

export interface ButtonProps extends SharedBasic {
  disabled?: boolean;
  flat?: boolean;
  large?: boolean;
  small?: boolean;
  floating?: boolean;
  fab?: boolean | FabOptions;
  icon?: React.ReactNode;
  modal?: ModalType;
  node?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tooltip?: string;
  tooltipOptions?: TooltipOptions;
  waves?: MaterialColor;
}

/**
 * React Materialize: Button
 */
declare const Button: React.FC<ButtonProps>;

export default Button;
