import * as React from "react";
import { AutocompleteOptions } from "./Autocomplete";
import { AnyFn, SharedBasic } from "./utils";

export interface ChipItem {[key: string]: string;}

export interface ChipOptions {
  data?: ChipItem[];
  placeholder?: string;
  secondaryPlaceholder?: string;
  autocompleteOptions?: AutocompleteOptions;
  limit?: number;
  onChipAdd?: AnyFn;
  onChipSelect?: (item: React.ReactNode, chip: HTMLElement) => void;
  onChipDelete?: AnyFn;
}

export interface ChipProps extends SharedBasic {
  close?: boolean;
  closeIcon?: React.ReactNode;
  options?: ChipOptions;
}

/**
 * React Materialize: Chip
 */
declare const Chip: React.FC<ChipProps>;

export default Chip;
