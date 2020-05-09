import * as React from 'react';
import { Responsive } from './utils';

interface AutocompleteData {
  [key: string]: string | null;
}

export interface AutocompleteOptions {
  data: AutocompleteData;
  limit?: number;
  onAutocomplete?: (value: string) => void;
  minLength?: number;
  sortFunction?: <T>(a: T, b: T, inputString: string) => number;
}

export interface AutocompleteProps extends Responsive {
  id?: string;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  options: AutocompleteOptions;
}

/**
 * React Materialize: Autocomplete
 */
declare const Autocomplete: React.FC<AutocompleteProps>

export default Autocomplete;
