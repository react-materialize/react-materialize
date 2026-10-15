import React from 'react';
import Autocomplete from '../src/Autocomplete';
import Icon from '../src/Icon';

const notes =
  'Add an autocomplete dropdown below your input to suggest possible values in your form. You can populate the list of autocomplete options dynamically as well.';

const storyParameters = { docs: { description: { story: notes } } };

export default {
  title: 'Javascript/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: { description: { component: notes } }
  },
  args: {
    options: {
      data: {
        'Gus Fring': null,
        'Saul Goodman': null,
        'Tuco Salamanca': 'https://picsum.photos/seed/rm-avatar/250/250'
      }
    },
    placeholder: 'Insert here'
  }
};

export const Default = {
  parameters: storyParameters
};

export const WithIcon = {
  name: 'With icon',
  args: { icon: 'textsms' },
  render: ({ icon, ...args }) => (
    <Autocomplete {...args} icon={<Icon>{icon}</Icon>} />
  ),
  parameters: storyParameters
};

export const WithLabel = {
  name: 'With label',
  args: { title: 'Input Label' },
  parameters: storyParameters
};
