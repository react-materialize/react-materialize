import * as React from "react";
import { DropdownOptions } from "./Dropdown";
import { Responsive, SharedBasic } from "./utils";

export type SelectDropdownAlignment = "left" | "right";

interface SelectOptions {
  classes?: string;
  dropdownOptions?: DropdownOptions;
}

export interface SelectProps extends Responsive, SharedBasic {
  id?: string;
  label?: string;
  multiple?: boolean;
  options?: SelectOptions;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  noLayout?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  validate?: boolean;
  success?: string;
  error?: string;
  browserDefault?: boolean;
}

/**
 * React Materialize: Select
 */
declare const Select: React.FC<SelectProps>;

export default Select;
