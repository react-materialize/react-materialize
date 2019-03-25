import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from '../src/Toast';

const stories = storiesOf('Javascript|Toast', module);

stories.addParameters({
  info: {
    text: `Materialize provides an easy way for you to send unobtrusive alerts to your users through toasts. These toasts are also placed and sized responsively, try it out by clicking the button below on different device sizes.`
  }
});

stories.add('Default', () => (
  <Toast options={{ html: 'Here you go!' }}>Toast</Toast>
));
