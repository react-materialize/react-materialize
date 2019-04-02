import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import TextInput from '../src/TextInput';

const stories = storiesOf('Components|TextInput', module);
stories.addDecorator(withKnobs);

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

stories.add('Default', () => <TextInput />);

stories.add('Label', () => <TextInput label={text('label', 'First Name')} />);

stories.add('Placeholder', () => (
  <TextInput placeholder={text('placeholder', 'First Name')} />
));

stories.add('Predefined value', () => (
  <TextInput value={text('value', 'John')} />
));

stories.add('Disabled', () => (
  <TextInput disabled={boolean('disabled', true)} value="John" />
));

stories.add('Password', () => (
  <TextInput password={boolean('password', true)} label="Password" />
));

stories.add('Email validate', () => (
  <TextInput
    email={boolean('email', true)}
    validate={boolean('validate', true)}
    label="Email"
  />
));

stories.add('with custom error/success', () => (
  <TextInput
    email
    validate
    label="Email"
    error={text('error', 'Wrong Email sir')}
    success={text('success', 'Great')}
  />
));

stories.add('with Icon', () => (
  <TextInput icon={text('icon', 'email')} label="Email" />
));
