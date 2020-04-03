import React from 'react';

import {
  Autocomplete,
  Tabs,
  Tab,
  Section,
  Carousel,
  Textarea,
  Collapsible,
  CollapsibleItem,
  Container,
  DatePicker,
  Divider,
  Dropdown,
  Button,
} from 'react-materialize';

<>
  <Autocomplete options={{ data: { asd: '32' }, onAutocomplete: () => 32 }} s={3} />;
  <Tabs className="hello" defaultValue="what" options={{ duration: 32, onShow: () => {}, swipeable: true, responsiveThreshold: 32 }} onChange={() => {}} />
  <Tab idx="as" title="Hello" />
  <Section node="div" className="foo" id="bar" />
  <Carousel images={['one.jpg']} options={{ numVisible: 32, onCycleTo: () => {} }} centerImages={true} />
  <Textarea disabled={false} value="hello">foo</Textarea>
  <Collapsible options={{ accordion: true }} />
  <CollapsibleItem href="http://" active={false} />
  <Container className="hello" />
  <DatePicker options={{ isRTL: false }} id="asd" />
  <Divider />
  <Dropdown id="Dropdown_6" options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onOpenStart: () => {},
      outDuration: 250
    }}
    trigger={<Button>Drop Me!</Button>}>
    <a href="#">one</a>
  </Dropdown>
</>
