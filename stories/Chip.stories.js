import React from 'react';
import { storiesOf } from '@storybook/react';
import Chip from '../src/Chip';

const stories = storiesOf('components/Chip', module);

stories.addParameters({
  info: {
    text: `Chips can be used to represent small 
    blocks of information. They are most commonly 
    used either for contacts or for tags.`
  }
});

stories.add('Default', () => (
  <Chip>Jane Doe</Chip>
));

stories.add('with close', () => (
  <Chip close>Jane Doe</Chip>
));
