import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../src/Select';

const stories = storiesOf('components/Select', module);

stories.addParameters({
  info: {
    text: `Select allows user input through specified options.`
  }
});

stories.add('Default', () => (
  <Select onChange={action('Select changed')}>
    <option value="" disabled selected>Choose your option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
));

stories.add('Multiple', () => (
  <Select multiple>
    <option value="" disabled selected>Choose your option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </Select>
));

stories.add('Label', () => (
  <Select label="Choose your option">
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3">Option 3</option>
  </Select>
));

stories.add('Disabled', () => (
  <Select disabled>
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3">Option 3</option>
  </Select>
));

stories.add('Browser default', () => (
  <Select browserDefault>
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3">Option 3</option>
  </Select>
));
