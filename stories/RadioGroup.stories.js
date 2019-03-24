import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioGroup from '../src/RadioGroup';

const stories = storiesOf('2. components/RadioGroup', module);

stories.addParameters({
  info: {
    text: `Radio Buttons are used when the user must make
     only one selection out of a group of items.
     Radios are added to a group by default.`
  }
});

stories.add('Default', () => (
  <RadioGroup
    name="size"
    label="T-Shirt Size"
    onChange={(evt) => console.log(evt.target.value)}
    options={[
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]}
  />
));

stories.add('Predefined value', () => (
  <RadioGroup
    name="size"
    label="T-Shirt Size"
    value="xl"
    options={[
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]}
  />
));

stories.add('with gap', () => (
  <RadioGroup
    name="size"
    withGap
    label="T-Shirt Size"
    value="xl"
    options={[
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]}
  />
));

stories.add('disabled', () => (
  <RadioGroup
    name="size"
    disabled
    label="T-Shirt Size"
    value="xl"
    options={[
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]}
  />
));

stories.add('with classnames', () => (
  <RadioGroup
    name="size"
    label="T-Shirt Size"
    radioClassNames="teal-text"
    options={[
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]}
  />
));
