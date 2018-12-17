import React from 'react';
import { storiesOf } from '@storybook/react';
import CardPanel from '../src/CardPanel';

const stories = storiesOf('components/CardPanel', module);

stories.addParameters({
  info: {
    text: `For a simpler card with less markup, try using a
    card panel which just has padding and a shadow effect`
  }
});

stories.add('Default', () => (
  <CardPanel className="teal">
    <span className="white-text">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
  </CardPanel>
));
