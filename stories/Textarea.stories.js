import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '../src/Textarea';

const stories = storiesOf('2. components/Textarea', module);

stories.addParameters({
  info: {
    text: `Textareas allow larger expandable user input. 
    The border should light up simply and clearly 
    indicating which field the user is currently editing.
    Textareas will auto resize to the text inside.`
  }
});

stories.add('Textarea', () => <Textarea />);

stories.add('Disabled', () => <Textarea value="I was here" disabled />);

stories.add('Placeholder', () => <Textarea placeholder="I was here" />);

stories.add('Label', () => <Textarea label="Write something here..." />);

stories.add('Icon', () => <Textarea icon="mode_edit" />);
