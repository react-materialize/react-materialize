import React from 'react';
import Select from '../src/Select';

export default {
  title: 'Components/Select/Browser default',
  component: Select,
  args: {
    browserDefault: true,
    value: '2',
    children: [
      <option key="1" value="1">
        Option 1
      </option>,
      <option key="2" value="2">
        Option 2
      </option>,
      <option key="3" value="3">
        Option 3
      </option>
    ]
  }
};

export const Default = {};

export const Disabled = {
  args: { disabled: true }
};
