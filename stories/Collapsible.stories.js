import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';
import Icon from '../src/Icon';

const stories = storiesOf('Javascript/Collapsible', module);

stories.addParameters({
  info: {
    text: `Collapsibles are accordion elements that expand 
    when clicked on. They allow you to hide content that is 
    not immediately relevant to the user. Expandable can be 
    set by adding accordion={false} as a prop.`
  }
});

stories.add('Accordion', () => (
  <Collapsible>
    <CollapsibleItem
      header="Better safe than sorry. That's my motto."
      icon={<Icon>filter_drama</Icon>}
    >
      Better safe than sorry. That's my motto.
    </CollapsibleItem>
    <CollapsibleItem
      header="Yeah, you do seem to have a little 'shit creek' action going."
      icon={<Icon>place</Icon>}
    >
      Yeah, you do seem to have a little 'shit creek' action going.
    </CollapsibleItem>
    <CollapsibleItem
      header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
      icon={<Icon>whatshot</Icon>}
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
      icon={<Icon>filter_drama</Icon>}
    >
      Better safe than sorry. That's my motto.
    </CollapsibleItem>
    <CollapsibleItem
      header="Yeah, you do seem to have a little 'shit creek' action going."
      icon={<Icon>place</Icon>}
    >
      Yeah, you do seem to have a little 'shit creek' action going.
    </CollapsibleItem>
    <CollapsibleItem
      header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
      icon={<Icon>whatshot</Icon>}
    >
      You know, FYI, you can buy a paddle. Did you not plan for this
      contingency?
    </CollapsibleItem>
  </Collapsible>
));

stories.add('Popout', () => (
  <Collapsible popout>
    <CollapsibleItem
      header="Better safe than sorry. That's my motto."
      icon={<Icon>filter_drama</Icon>}
    >
      Better safe than sorry. That's my motto.
    </CollapsibleItem>
    <CollapsibleItem
      header="Yeah, you do seem to have a little 'shit creek' action going."
      icon={<Icon>place</Icon>}
    >
      Yeah, you do seem to have a little 'shit creek' action going.
    </CollapsibleItem>
    <CollapsibleItem
      header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
      icon={<Icon>whatshot</Icon>}
    >
      You know, FYI, you can buy a paddle. Did you not plan for this
      contingency?
    </CollapsibleItem>
  </Collapsible>
));

stories.add('Preselected Section', () => (
  <Collapsible>
    <CollapsibleItem
      header="Better safe than sorry. That's my motto."
      icon={<Icon>filter_drama</Icon>}
    >
      Better safe than sorry. That's my motto.
    </CollapsibleItem>
    <CollapsibleItem
      header="Yeah, you do seem to have a little 'shit creek' action going."
      icon={<Icon>place</Icon>}
      expanded
    >
      Yeah, you do seem to have a little 'shit creek' action going.
    </CollapsibleItem>
    <CollapsibleItem
      header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
      icon={<Icon>whatshot</Icon>}
    >
      You know, FYI, you can buy a paddle. Did you not plan for this
      contingency?
    </CollapsibleItem>
  </Collapsible>
));
