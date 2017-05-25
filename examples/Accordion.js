import React from 'react';
import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';

export default
<Collapsible accordion defaultActiveKey={1}>
  <CollapsibleItem header='First' icon='filter_drama' eventKey={1}>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Second' icon='place' eventKey={2}>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Third' icon='whatshot' eventKey={3}>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
</Collapsible>;
