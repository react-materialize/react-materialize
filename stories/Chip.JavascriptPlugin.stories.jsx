import React from 'react';
import Chip from '../src/Chip';

export default {
  title: 'Components/Chip/Javascript Plugin',
  component: Chip
};

export const Default = {
  args: { options: {} },
  parameters: {
    docs: {
      description: {
        story:
          'To add tags, just enter your tag text and press enter. You can delete them by clicking on the close icon or by using your delete button.'
      }
    }
  }
};

export const InitialTags = {
  name: 'Initial tags',
  args: {
    options: {
      data: [{ tag: 'Apple' }, { tag: 'Microsoft' }, { tag: 'Google' }]
    }
  },
  parameters: { docs: { description: { story: 'Set initial tags.' } } }
};

export const Placeholders = {
  args: {
    options: { placeholder: 'Enter a tag', secondaryPlaceholder: '+Tag' }
  },
  parameters: {
    docs: {
      description: { story: 'Use placeholders and override hint texts.' }
    }
  }
};

export const Autocomplete = {
  args: {
    options: {
      autocompleteOptions: {
        data: { Apple: null, Microsoft: null, Google: null },
        limit: Infinity,
        minLength: 1
      }
    }
  },
  parameters: {
    docs: { description: { story: 'Use autocomplete with chips.' } }
  }
};
