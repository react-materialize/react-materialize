import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '../src/Badge';

const stories = storiesOf('components/Badge', module);

stories.add('Default', () => <Badge>4</Badge>);

stories.add('newIcon', () => (
  <Badge className="red" newIcon>
    4
  </Badge>
));

stories.add('caption', () => <Badge caption="more">4</Badge>);
