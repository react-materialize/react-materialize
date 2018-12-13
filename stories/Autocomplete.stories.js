import React from 'react';
import { storiesOf } from '@storybook/react';
import Autocomplete from '../src/Autocomplete';

const stories = storiesOf('javascript/Autocomplete', module);

stories.add('Default', () => {
  const props = {
    options: {
      data: {
        Apple: null,
        Microsoft: null,
        Google: 'https://placehold.it/250x250'
      }
    },
    placeholder: 'Insert here'
  };

  return <Autocomplete {...props} />;
});
