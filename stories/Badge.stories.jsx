import React from 'react';
import Badge from '../src/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Badges can notify you that there are new or unread messages or notifications. Add the `newIcon` prop to the badge to give it the background.'
      }
    }
  },
  args: { children: '4' }
};

export const Default = {};

export const NewIcon = {
  name: 'newIcon',
  args: { className: 'red', newIcon: true }
};

export const Caption = {
  name: 'caption',
  args: { caption: 'more' }
};
