import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import Textarea from '../src/Textarea';

const stories = storiesOf('Components|Textarea', module);
stories.addDecorator(withKnobs);

stories.addParameters({
  info: {
    text: `Textareas allow larger expandable user input. 
    The border should light up simply and clearly 
    indicating which field the user is currently editing.
    Textareas will auto resize to the text inside.`
  }
});

stories.add('Textarea', () => <Textarea />);

stories.add('Disabled', () => (
  <Textarea
    value={text('value', 'I was here')}
    disabled={boolean('disabled', true)}
  />
));

stories.add('Placeholder', () => (
  <Textarea placeholder={text('placeholder', 'I was here')} />
));

stories.add('Label', () => (
  <Textarea label={text('label', 'Write something here...')} />
));

stories.add('Icon', () => <Textarea icon={text('icon', 'mode_edit')} />);
