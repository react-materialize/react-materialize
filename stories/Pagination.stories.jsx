import React from 'react';
import Pagination from '../src/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'Add pagination links to help split up your long content into shorter, easier to understand blocks. You just have to provide the items and onSelect attribute, when clicked, the onSelect function will be called with the page number. Otherwise you can customize the page button with PaginationButton component.'
      }
    }
  }
};

export const Default = {
  args: { items: 10, maxButtons: 8 }
};

export const WithActivePage = {
  name: 'with activePage',
  args: { items: 5, activePage: 3 }
};
