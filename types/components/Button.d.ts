import * as React from "react";
import { MaterialColor, Positions, SharedBasic } from "./utils";

export type ModalType = "close" | "confirm";

export interface FabOptions {
  direction?: Positions;
  hoverEnabled?: boolean;
  toolbarEnabled?: boolean;
}

export interface TooltipOptions {
  delay: number;
  position?: Positions;
  tooltip?: string;
  html?: boolean;
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
