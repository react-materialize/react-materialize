import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import Chip from '../src/Chip';

const stories = storiesOf('Components|Chip', module);

stories.addParameters({
  info: {
    text: `Chips can be used to represent small 
    blocks of information. They are most commonly 
    used either for contacts or for tags.`
  }
});

stories.addDecorator(withKnobs);

stories.add('Default', () => <Chip>{text('text', 'Jane Doe')}</Chip>, {
  notes:
    'Chips can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.'
});

stories.add('Tags', () => <Chip close={boolean('close', true)}>Tag</Chip>, {
  notes:
    'To create a tag chip just add a close icon inside with the prop `close`.'
});

stories.add(
  'Contacts',
  () => (
    <Chip>
      <img
        src={text('image', 'https://materializecss.com/images/yuna.jpg')}
        className="responsive-img"
        alt="Contact Person"
      />
      {text('text', 'Jane Doe')}
    </Chip>
  ),
  {
    notes: 'To create a contact chip just add an img inside.'
  }
);

const JavaScriptPlugin = storiesOf('Components|Chip/Javascript Plugin', module);

JavaScriptPlugin.add('Default', () => <Chip options={{}} />, {
  notes:
    'To add tags, just enter your tag text and press enter. You can delete them by clicking on the close icon or by using your delete button.'
});

JavaScriptPlugin.add(
  'Initial tags',
  () => (
    <Chip
      options={{
        data: [
          {
            tag: 'Apple'
          },
          {
            tag: 'Microsoft'
          },
          {
            tag: 'Google'
          }
        ]
      }}
    />
  ),
  {
    notes: 'Set initial tags.'
  }
);

JavaScriptPlugin.add(
  'Placeholders',
  () => (
    <Chip
      options={{
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag'
      }}
    />
  ),
  {
    notes: 'Use placeholders and override hint texts.'
  }
);

JavaScriptPlugin.add(
  'Autocomplete',
  () => (
    <Chip
      options={{
        autocompleteOptions: {
          data: {
            Apple: null,
            Microsoft: null,
            Google: null
          },
          limit: Infinity,
          minLength: 1
        }
      }}
    />
  ),
  {
    notes: 'Use autocomplete with chips.'
  }
);
