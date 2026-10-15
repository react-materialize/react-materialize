import React from 'react';
import Chip from '../src/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component:
          'Chips can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.'
      }
    }
  }
};

export const Default = {
  args: { children: 'Jane Doe' },
  parameters: {
    docs: {
      description: {
        story:
          'Chips can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.'
      }
    }
  }
};

export const Tags = {
  args: { close: true, children: 'Tag' },
  parameters: {
    docs: {
      description: {
        story:
          'To create a tag chip just add a close icon inside with the prop `close`.'
      }
    }
  }
};

export const Contacts = {
  args: {
    image: 'https://materializecss.com/images/yuna.jpg',
    text: 'Jane Doe'
  },
  argTypes: {
    image: { control: 'text', description: 'Story-only: contact image URL' },
    text: { control: 'text', description: 'Story-only: chip text' }
  },
  render: ({ image, text, ...args }) => (
    <Chip {...args}>
      <img src={image} className="responsive-img" alt="Contact Person" />
      {text}
    </Chip>
  ),
  parameters: {
    docs: {
      description: { story: 'To create a contact chip just add an img inside.' }
    }
  }
};
