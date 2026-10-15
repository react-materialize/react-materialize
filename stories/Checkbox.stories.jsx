import React from 'react';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "Use checkboxes when looking for yes or no answers. The for attribute is necessary to bind our custom checkbox with the input. Add the input's id as the value of the for attribute of the label."
      }
    }
  },
  args: { value: 'Red', label: 'Red' }
};

export const Default = {};

export const Checked = { args: { checked: true } };

export const FilledInChecked = {
  name: 'Filled-In Checked',
  args: { filledIn: true, checked: true }
};

export const Indeterminate = { args: { indeterminate: true } };

export const Disabled = { args: { disabled: true } };

export const DisabledChecked = { args: { disabled: true, checked: true } };
