import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../src/Switch';

const stories = storiesOf('Components/Switch', module);

stories.addParameters({
  info: {
    text: `Switches are special checkboxes used for binary states such as on / off`
  }
});

stories.add('Switch', () => <Switch offLabel="Off" onLabel="On" />);

stories.add('Disabled', () => <Switch disabled offLabel="Off" onLabel="On" />);
