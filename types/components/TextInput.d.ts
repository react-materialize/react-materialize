import * as React from "react";
import { Responsive } from "./utils";

export interface TextInputProps extends Responsive {
  noLayout?: boolean;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  validate?: boolean;
  success?: string;
  error?: string;
  inputClassName?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
  email?: boolean;
  children?: React.ReactNode;
  name?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

/**
 * React Materialize: TextInput
 */
declare const TextInput: React.FC<TextInputProps>;

export default TextInput;
