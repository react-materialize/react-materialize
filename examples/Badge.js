import React from 'react';
import Badge from '../src/Badge';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';

export default
<Collection>
  <CollectionItem>
    Alan <Badge>1</Badge>
  </CollectionItem>
  <CollectionItem>
    Alan <Badge new={true}>2</Badge>
  </CollectionItem>
</Collection>;
