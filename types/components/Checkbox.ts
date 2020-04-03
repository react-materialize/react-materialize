import * as React from "react";

export interface CheckboxProps {
  value: string;
  label: string;
  className?: string;
  filledIn?: boolean;
  indeterminate?: boolean;
  onChange?: (e: React.MouseEvent<HTMLInputElement>) => void;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
}

/**
 * React Materialize: Checkbox
 */
declare const Checkbox: React.FC<CheckboxProps>;

export default Checkbox;
