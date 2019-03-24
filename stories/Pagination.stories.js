import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../src/Pagination';

const stories = storiesOf('Components|Pagination', module);

stories.addParameters({
  info: {
    text: `Add pagination links to help split up your long content into shorter, easier to understand blocks. You just have to provide the items and onSelect attribute, when clicked, the onSelect function will be called with the page number. Otherwise you can customize the page button with PaginationButton component.`
  }
});

stories.add('Default', () => (
  <Pagination items={10} activePage={2} maxButtons={8} />
));
