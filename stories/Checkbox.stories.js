import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/Checkbox';

const stories = storiesOf('Components/Checkbox', module);

stories.addParameters({
  info: {
    text: `Use checkboxes when looking for yes or no answers. 
    The for attribute is necessary to bind our custom checkbox 
    with the input. Add the input's id as the value of the for 
    attribute of the label.`
  }
});

stories.add('Default', () => <Checkbox value="Red" label="Red" />);

stories.add('Checked', () => <Checkbox value="Red" label="Red" checked />);

stories.add('Filled-In Checked', () => (
  <Checkbox value="Red" label="Red" filledIn checked />
));

stories.add('Indeterminate', () => (
  <Checkbox value="Red" label="Red" indeterminate />
));

stories.add('Disabled', () => <Checkbox value="Red" label="Red" disabled />);

stories.add('Disabled Checked', () => (
  <Checkbox value="Red" label="Red" disabled checked />
));
