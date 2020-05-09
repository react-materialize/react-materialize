import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/Dropdown';
import Divider from '../src/Divider';
import Button from '../src/Button';
import Icon from '../src/Icon';

const stories = storiesOf('Javascript/Dropdown', module);

stories.addParameters({
  info: {
    text: `Add a dropdown list to any button. 
    You can add a divider with the <Divider /> component. 
    You can also add icons.`
  }
});

stories.add('Default', () => (
  <Dropdown trigger={<Button>Drop Me!</Button>}>
    <a href="#">one</a>
    <a href="#">two</a>
    <Divider />
    <a href="#">three</a>
    <a href="#">
      <Icon>view_module</Icon>four
    </a>
    <a href="#">
      <Icon>cloud</Icon> five
    </a>
  </Dropdown>
));
