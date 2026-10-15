import React from 'react';
import { fn } from 'storybook/test';
import Icon from '../src/Icon';
import Select from '../src/Select';

const chooseOptions = [
  <option key="" value="" disabled>
    Choose your option
  </option>,
  <option key="1" value="1">
    Option 1
  </option>,
  <option key="2" value="2">
    Option 2
  </option>,
  <option key="3" value="3">
    Option 3
  </option>
];

const plainOptions = chooseOptions.slice(1);

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Select allows user input through specified options.'
      }
    }
  }
};

export const Default = {
  args: { value: '', onChange: fn(), children: chooseOptions }
};

export const WithIcon = {
  name: 'with Icon',
  args: { value: '', children: chooseOptions },
  render: args => <Select {...args} icon={<Icon>cloud</Icon>} />
};

export const Multiple = {
  args: { multiple: true, value: [''], children: chooseOptions }
};

export const Label = {
  args: { label: 'Choose your option', value: '2', children: plainOptions }
};

export const Disabled = {
  args: { disabled: true, value: '2', children: plainOptions }
};
