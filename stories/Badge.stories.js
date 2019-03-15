import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '../src/Badge';

const stories = storiesOf('2. components/Badge', module);

stories.addParameters({
  info: {
    text: `Badges can notify you that there are 
    new or unread messages or notifications. Add the 
    'newIcon' prop to the badge to give it the background.`
  }
});

stories.add('Default', () => <Badge>4</Badge>);

stories.add('newIcon', () => (
  <Badge className="red" newIcon>
    4
  </Badge>
));

stories.add('caption', () => <Badge caption="more">4</Badge>);
