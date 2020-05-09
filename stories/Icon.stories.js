import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../src/Icon';

const stories = storiesOf('Components/Icons', module);

stories.addParameters({
  info: {
    text: `We have included 740 Material Design Icons courtesy of Google. You can download them directly from the Material Design specs.`
  }
});

stories.add('Default', () => <Icon>cloud</Icon>);
stories.add('Tiny', () => <Icon tiny>cloud</Icon>);
stories.add('Small', () => <Icon small>cloud</Icon>);
stories.add('Medium', () => <Icon medium>cloud</Icon>);
stories.add('Large', () => <Icon large>cloud</Icon>);
