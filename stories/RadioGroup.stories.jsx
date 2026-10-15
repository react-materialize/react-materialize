import React from 'react';
import { fn } from 'storybook/test';
import RadioGroup from '../src/RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Radio Buttons are used when the user must make only one selection out of a group of items. Radios are added to a group by default.'
      }
    }
  },
  args: {
    name: 'size',
    label: 'T-Shirt Size',
    options: [
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]
  }
};

export const Default = {
  args: { onChange: fn() }
};

export const PredefinedValue = {
  name: 'Predefined value',
  args: { value: 'xl' }
};

export const WithGap = {
  name: 'with gap',
  args: { withGap: true, value: 'xl' }
};

export const Disabled = {
  name: 'disabled',
  args: { disabled: true, value: 'xl' }
};

export const WithClassnames = {
  name: 'with classnames',
  args: { radioClassNames: 'teal-text' }
};
