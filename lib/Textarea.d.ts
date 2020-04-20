import * as React from "react";
import { Responsive } from "./utils";

export interface TextareaProps extends Responsive {
  noLayout?: boolean;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  label?: string;
  defaultValue?: string;
  value?: string;
  validate?: boolean;
  success?: string;
  error?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * React Materialize: Textarea
 */
declare const Textarea: React.FC<TextareaProps>;

export default Textarea;
