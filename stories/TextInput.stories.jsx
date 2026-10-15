import React from 'react';
import Icon from '../src/Icon';
import TextInput from '../src/TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component:
          "Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing. The `validate` prop leverages HTML5 validation and will add a `valid` and `invalid` class accordingly. If you don't want the Green and Red validation states, just remove the `validate` prop."
      }
    }
  }
};

export const Default = {};

export const Label = {
  args: { label: 'First Name' }
};

export const Placeholder = {
  args: { placeholder: 'First Name' }
};

export const PredefinedValue = {
  name: 'Predefined value',
  args: { value: 'John' }
};

export const Disabled = {
  args: { disabled: true, value: 'John' }
};

export const Password = {
  args: { password: true, label: 'Password' }
};

export const EmailValidate = {
  name: 'Email validate',
  args: { email: true, validate: true, label: 'Email' }
};

export const FileType = {
  name: 'File type',
  args: { type: 'file', label: 'File' }
};

export const CharacterCounter = {
  name: 'Character Counter',
  args: { label: 'Input text', 'data-length': 10 },
  parameters: {
    docs: {
      description: {
        story:
          'Use a character counter in fields where a character restriction is in place.'
      }
    }
  }
};

export const WithCustomErrorSuccess = {
  name: 'with custom error/success',
  args: {
    email: true,
    validate: true,
    label: 'Email',
    error: 'Wrong Email sir',
    success: 'Great'
  }
};

export const WithIconString = {
  name: 'with icon string',
  args: { icon: 'email', label: 'Email' }
};

export const WithIconNode = {
  name: 'with icon node',
  args: { icon: 'email', label: 'Email' },
  render: ({ icon, ...args }) => (
    <TextInput {...args} icon={<Icon>{icon}</Icon>} />
  )
};
