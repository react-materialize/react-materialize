import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from '../src/TextInput';

const stories = storiesOf('components/TextInput', module);

stories.addParameters({
  info: {
    text: `Text fields allow user input. The border should light
     up simply and clearly indicating which field the user is 
     currently editing.
     The validate prop leverages HTML5 validation and will add
      a valid and invalid class accordingly. If you don't want 
      the Green and Red validation states, just remove the validate prop.`
  }
});

stories.add('Default', () => (
  <TextInput />
));

stories.add('Label', () => (
  <TextInput label="First Name" />
));

stories.add('Placeholder', () => (
  <TextInput placeholder="First Name" />
));

stories.add('Predefined value', () => (
  <TextInput value="John" />
));

stories.add('Disabled', () => (
  <TextInput disabled value="John" />
));

stories.add('Password', () => (
  <TextInput password label="Password" />
));

stories.add('Email validate', () => (
  <TextInput email validate label="Email" />
));

stories.add('with custom error/success', () => (
  <TextInput email validate label="Email" error="Wrong Email sir" success="Great" />
));

stories.add('with Icon', () => (
  <TextInput icon="email" label="Email" />
));
