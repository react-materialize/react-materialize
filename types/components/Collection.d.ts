import * as React from 'react';
import { SharedBasic } from './utils';

export interface CollectionProps extends SharedBasic {
  header?: React.ReactNode;
}

/**
 * React Materialize: Collection
 */
declare const Collection: React.FC<CollectionProps>

export default Collection;
