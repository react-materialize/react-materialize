import React from 'react';
import { storiesOf } from '@storybook/react';
import Range from '../src/Range';

const stories = storiesOf('Components/Range', module);

stories.addParameters({
  info: {
    text: `Add a range slider for values with a wide range.
      This one is set to be a number between 0 and 100.
      By default the range component is a plain html5 range input,
      if you want a more detailed solution, materialize-css recommends
      https://refreshless.com/nouislider/.`
  }
});

stories.add('Default', () => (
  <Range min="0" max="100" name="points" step="0.5" />
));
