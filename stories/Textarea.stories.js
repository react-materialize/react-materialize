import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, withKnobs } from '@storybook/addon-knobs';
import Row from '../src/Row';
import Textarea from '../src/Textarea';
import Icon from '../src/Icon';

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

stories.add('Textarea', () => {
  const defaultValue = 12;
  const options = {
    range: true,
    min: 1,
    max: 12,
    step: 1
  };

  return (
    <Row>
      <Textarea
        s={number('s', defaultValue, options)}
        m={number('m', defaultValue, options)}
        l={number('l', defaultValue, options)}
        xl={number('xl', defaultValue, options)}
      />
    </Row>
  );
});

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

stories.add('Icon', () => (
  <Textarea icon={<Icon>{text('icon', 'textsms')}</Icon>} />
));

stories.add(
  'Character Counter',
  () => <Textarea label="Textarea" data-length={120} />,
  {
    info: {
      text:
        'Use a character counter in fields where a character restriction is in place.'
    }
  }
);
