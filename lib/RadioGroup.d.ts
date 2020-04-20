import * as React from "react";

export interface RadioGroupProps {
  label?: string;
  name?: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  withGap?: boolean;
  onChange?: (event: React.MouseEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  radioClassNames?: string;
}

/**
 * React Materialize: RadioGroup
 */
declare const RadioGroup: React.FC<RadioGroupProps>;

export default RadioGroup;
