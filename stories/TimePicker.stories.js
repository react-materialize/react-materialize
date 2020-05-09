import React from 'react';
import { storiesOf } from '@storybook/react';
import TimePicker from '../src/TimePicker';

const stories = storiesOf('Components/Pickers', module);

stories.addParameters({
  info: {
    text: `The timepicker allows users to select a date from an interactive clock.`
  }
});

stories.add('TimePicker', () => <TimePicker />);
