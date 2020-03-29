import React from 'react';

import {
  Autocomplete,
  Tabs,
  Tab,
  Section
} from 'react-materialize';

<>
  <Autocomplete options={{ data: { asd: '32' }, onAutocomplete: () => 32 }} s={3} />;
  <Tabs className="hello" defaultValue="what" options={{ duration: 32, onShow: () => {}, swipeable: true, responsiveThreshold: 32 }} onChange={() => {}} />
  <Tab idx="as" title="Hello" />
  <Section node="div" className="foo" id="bar" />
</>
