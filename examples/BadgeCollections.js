import React from 'react';
import Badge from '../src/Badge';
import Collection from '../src/Collection';
import CollectionItem from '../src/CollectionItem';

export default
<Collection>
  <CollectionItem href="#!">
    Alan <Badge>1</Badge>
  </CollectionItem>
  <CollectionItem href="#!">
    Alan <Badge newIcon>4</Badge>
  </CollectionItem>
  <CollectionItem href="#!">
    Alan
  </CollectionItem>
  <CollectionItem href="#!">
    Alan <Badge>14</Badge>
  </CollectionItem>
</Collection>;
