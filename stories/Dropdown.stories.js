import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/Dropdown';
import Divider from '../src/Divider';
import Button from '../src/Button';

const stories = storiesOf('3. javascript/Dropdown', module);

stories.addParameters({
  info: {
    text: `Add a dropdown list to any button. 
    You can add a divider with the <Divider /> component. 
    You can also add icons.`
  }
});

stories.add('Default', () => (
  <Dropdown trigger={<Button>open</Button>}>
    <a href="#">test</a>
    <Divider />
    <a href="#">test</a>
  </Dropdown>
));
