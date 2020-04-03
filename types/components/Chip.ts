import * as React from 'react';
import { SharedBasic, AnyFn } from './utils';
import { AutocompleteOptions } from './Autocomplete';

type ChipItem = {[key: string]: string};

export interface ChipOptions {
  data?: ChipItem[];
  placeholder?: string;
  secondaryPlaceholder?: string;
  autocompleteOptions?: AutocompleteOptions;
  limit?: number;
  onChipAdd?: AnyFn;
  onChipSelect?: (item: React.ReactNode) => void;
  onChipDelete?: AnyFn;
};

export interface ChipProps extends SharedBasic {
  close?: boolean;
  closeIcon?: React.ReactNode;
  options?: ChipOptions;
};

/**
 * React Materialize: Chip
 */
declare const Chip: React.FC<ChipProps>

export default Chip;
