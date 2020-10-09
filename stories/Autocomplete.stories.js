import React from 'react';
import { storiesOf } from '@storybook/react';
import Autocomplete from '../src/Autocomplete';
import Icon from '../src/Icon';
import { text, withKnobs, object } from '@storybook/addon-knobs';

const stories = storiesOf('Javascript/Autocomplete', module);
stories.addDecorator(withKnobs);

const notes = `Add an autocomplete dropdown below your input 
  to suggest possible values in your form. You can 
  populate the list of autocomplete options dynamically as well.`;

stories.add(
  'Default',
  () => (
    <Autocomplete
      options={{
        data: object('Data', {
          ['Gus Fring']: null,
          ['Saul Goodman']: null,
          ['Tuco Salamanca']: 'https://placehold.it/250x250'
        })
      }}
      placeholder={text('placeholder', 'Insert here')}
    />
  ),
  { notes }
);

stories.add(
  'With icon',
  () => (
    <Autocomplete
      options={{
        data: object('Data', {
          ['Gus Fring']: null,
          ['Saul Goodman']: null,
          ['Tuco Salamanca']: 'https://placehold.it/250x250'
        })
      }}
      placeholder={text('placeholder', 'Insert here')}
      icon={<Icon>{text('icon', 'textsms')}</Icon>}
    />
  ),
  { notes }
);

stories.add(
  'With label',
  () => (
    <Autocomplete
      options={{
        data: object('Data', {
          ['Gus Fring']: null,
          ['Saul Goodman']: null,
          ['Tuco Salamanca']: 'https://placehold.it/250x250'
        })
      }}
      placeholder={text('placeholder', 'Insert here')}
      title={text('label', 'Input Label')}
    />
  ),
  { notes }
);
