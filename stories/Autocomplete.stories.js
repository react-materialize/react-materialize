import React from 'react';
import { storiesOf } from '@storybook/react';
import Autocomplete from '../src/Autocomplete';

const stories = storiesOf('javascript/Autocomplete', module);

stories.addParameters({
  info: {
    text: `Add an autocomplete dropdown below your input 
    to suggest possible values in your form. You can 
    populate the list of autocomplete options dynamically as well.`
  }
});

stories.add('Default', () => (
  <Autocomplete
    options={{
      data: {
        ['Gus Fring']: null,
        ['Saul Goodman']: null,
        ['Tuco Salamanca']: 'https://placehold.it/250x250'
      }
    }}
    placeholder="Insert here"
  />
));
