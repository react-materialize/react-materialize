import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../src/Breadcrumb';

const stories = storiesOf('Components/Breadcrumb', module);

stories.addParameters({
  info: {
    text: `Breadcrumbs are a good way to display your 
    current location. This is usually used when you have 
    multiple layers of content.`
  }
});

stories.add('Default', () => (
  <Breadcrumb className="teal">
    <a href="#">One</a>
    <a href="#">Two</a>
    <a href="#">Three</a>
  </Breadcrumb>
));
