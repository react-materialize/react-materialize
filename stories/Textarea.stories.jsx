import React from 'react';
import Icon from '../src/Icon';
import Row from '../src/Row';
import Textarea from '../src/Textarea';

const gridControl = { control: { type: 'range', min: 1, max: 12, step: 1 } };

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'Textareas allow larger expandable user input. The border should light up simply and clearly indicating which field the user is currently editing. Textareas will auto resize to the text inside.'
      }
    }
  }
};

export const Default = {
  name: 'Textarea',
  args: { s: 12, m: 12, l: 12, xl: 12 },
  argTypes: { s: gridControl, m: gridControl, l: gridControl, xl: gridControl },
  render: args => (
    <Row>
      <Textarea {...args} />
    </Row>
  )
};

export const Disabled = {
  args: { value: 'I was here', disabled: true }
};

export const Placeholder = {
  args: { placeholder: 'I was here' }
};

export const Label = {
  args: { label: 'Write something here...' }
};

export const WithIcon = {
  name: 'Icon',
  render: () => <Textarea icon={<Icon>mode_edit</Icon>} />
};

export const CharacterCounter = {
  name: 'Character Counter',
  args: { label: 'Textarea', 'data-length': 120 },
  parameters: {
    docs: {
      description: {
        story:
          'Use a character counter in fields where a character restriction is in place.'
      }
    }
  }
};
