import * as React from 'react';
import { SharedBasic } from './utils';

export interface CollectionItemProps extends SharedBasic {
  active?: boolean;
  href?: string;
}

/**
 * React Materialize: CollectionItem
 */
declare const CollectionItem: React.FC<CollectionItemProps>

export default CollectionItem;
