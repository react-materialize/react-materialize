import React from 'react';
import Breadcrumb from '../src/Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content.'
      }
    }
  }
};

export const Default = {
  args: {
    className: 'teal',
    children: [
      <a key="1" href="#">
        One
      </a>,
      <a key="2" href="#">
        Two
      </a>,
      <a key="3" href="#">
        Three
      </a>
    ]
  }
};
