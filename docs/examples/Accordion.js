import React from 'react';
import Collapsible from '../../src/Collapsible';
import CollapsibleItem from '../../src/CollapsibleItem';

export default
<Collapsible accordion defaultActiveKey={1}>
  <CollapsibleItem header='First' mdi='image-filter-drama' eventKey={1}>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Second' mdi='maps-place' eventKey={2}>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Third' mdi='social-whatshot' eventKey={3}>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
</Collapsible>;
