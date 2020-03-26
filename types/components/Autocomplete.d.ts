import * as React from 'react';
import { Responsive } from './utils';

interface AutocompleteData {
  [key: string]: string | null;
}

declare namespace Autocomplete {
  interface AutocompleteOptions {
    data: AutocompleteData;
    limit?: number;
    onAutocomplete?: () => void;
    minLength?: number;
    sortFunction?: <T>(a: T, b: T, inputString: string) => number;
  }

  interface AutocompleteProps extends Responsive {
    id?: string;
    className?: string;
    title?: string;
    icon?: React.ReactNode;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent) => void;
    value?: string;
    options: AutocompleteOptions;
  }
}

declare class Autocomplete extends React.Component<Autocomplete.AutocompleteProps> {}

export = Autocomplete;
