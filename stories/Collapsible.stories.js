import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';

const stories = storiesOf('3. javascript/Collapsible', module);

stories.addParameters({
  info: {
    text: `Collapsibles are accordion elements that expand 
    when clicked on. They allow you to hide content that is 
    not immediately relevant to the user. Expandable can be 
    set by adding accordion={false} as a prop.`
  }
});

stories.add('Default', () => (
  <Collapsible>
    <CollapsibleItem
      header="Better safe than sorry. That's my motto."
      icon="filter_drama"
    >
      Better safe than sorry. That's my motto.
    </CollapsibleItem>
    <CollapsibleItem
      header="Yeah, you do seem to have a little 'shit creek' action going."
      icon="place"
    >
      Yeah, you do seem to have a little 'shit creek' action going.
    </CollapsibleItem>
    <CollapsibleItem
      header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
      icon="whatshot"
    >
      You know, FYI, you can buy a paddle. Did you not plan for this
      contingency?
    </CollapsibleItem>
  </Collapsible>
));

stories.add('Expandable', () => (
  <Collapsible accordion={false}>
    <CollapsibleItem
      header="Better safe than sorry. That's my motto."
      icon="filter_drama"
    >
      Better safe than sorry. That's my motto.
    </CollapsibleItem>
    <CollapsibleItem
      header="Yeah, you do seem to have a little 'shit creek' action going."
      icon="place"
    >
      Yeah, you do seem to have a little 'shit creek' action going.
    </CollapsibleItem>
    <CollapsibleItem
      header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
      icon="whatshot"
    >
      You know, FYI, you can buy a paddle. Did you not plan for this
      contingency?
    </CollapsibleItem>
  </Collapsible>
));
