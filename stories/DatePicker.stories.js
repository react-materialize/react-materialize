import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from '../src/DatePicker';

const stories = storiesOf('Components/Pickers', module);

stories.addParameters({
  info: {
    text: `The datepicker allows users to select a date from an interactive calendar.`
  }
});

stories.add('DatePicker', () => <DatePicker />);
