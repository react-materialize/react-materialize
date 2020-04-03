import * as React from 'react';
import { AnyFn } from './utils';

interface CollapsibleOptions {
  accordion?: boolean;
  onOpenStart?: AnyFn;
  onOpenEnd?: AnyFn;
  onCloseStart?: AnyFn;
  onCloseEnd?: AnyFn;
  inDuration?: number;
  outDuration?: number;
}

export interface CollapsibleProps {
  accordion?: boolean;
  className?: string;
  children?: React.ReactElement;
  popout?: boolean;
  defaultActiveKey?: string;
  onSelect?: (key: number) => any;
  options?: CollapsibleOptions;
}

/**
 * React Materialize: Collapsible
 */
declare const Collapsible: React.FC<CollapsibleProps>

export default Collapsible;
