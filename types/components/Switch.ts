import * as React from "react";

export interface SwitchProps {
  id?: string;
  className?: string;
  offLabel: string;
  onLabel: string;
  onChange?: (e: React.MouseEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
}

/**
 * React Materialize: Switch
 */
declare const Switch: React.FC<SwitchProps>;

export default Switch;
