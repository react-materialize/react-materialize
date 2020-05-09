import * as React from "react";
import { AutocompleteOptions } from "./Autocomplete";
import { SharedBasic } from "./utils";

export interface ChipItem {
  tag: string;
  image?: string;
}

export interface ChipOptions {
  data?: ChipItem[];
  placeholder?: string;
  secondaryPlaceholder?: string;
  autocompleteOptions?: Exclude<AutocompleteOptions, 'onAutocomplete'>;
  limit?: number;
  onChipAdd?: (item: any, chip: HTMLElement) => void;
  onChipSelect?: (item: any, chip: HTMLElement) => void;
  onChipDelete?: (item: any, chip: HTMLElement) => void;
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
