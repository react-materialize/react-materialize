import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';
import Icon from '../src/Icon';

const renderItems = expandedIndex => [
  <CollapsibleItem
    key="1"
    header="Better safe than sorry. That's my motto."
    icon={<Icon>filter_drama</Icon>}
    expanded={expandedIndex === 0 || undefined}
  >
    Better safe than sorry. That's my motto.
  </CollapsibleItem>,
  <CollapsibleItem
    key="2"
    header="Yeah, you do seem to have a little 'shit creek' action going."
    icon={<Icon>place</Icon>}
    expanded={expandedIndex === 1 || undefined}
  >
    Yeah, you do seem to have a little 'shit creek' action going.
  </CollapsibleItem>,
  <CollapsibleItem
    key="3"
    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
    icon={<Icon>whatshot</Icon>}
    expanded={expandedIndex === 2 || undefined}
  >
    You know, FYI, you can buy a paddle. Did you not plan for this contingency?
  </CollapsibleItem>
];

export default {
  title: 'Javascript/Collapsible',
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          'Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user. Expandable can be set by adding `accordion={false}` as a prop.'
      }
    }
  },
  render: args => <Collapsible {...args}>{renderItems()}</Collapsible>
};

export const Accordion = {};

export const Expandable = {
  args: { accordion: false }
};

export const Popout = {
  args: { popout: true }
};

export const PreselectedSection = {
  render: args => <Collapsible {...args}>{renderItems(1)}</Collapsible>
};
