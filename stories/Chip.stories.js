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

stories.add('Default', () => <Chip>{text('text', 'Jane Doe')}</Chip>);

stories.add('Tags', () => <Chip close={boolean('close', true)}>Tag</Chip>);

stories.add('Contacts', () => (
  <Chip>
    <img
      src={text('image', 'https://materializecss.com/images/yuna.jpg')}
      className="responsive-img"
      alt="Contact Person"
    />
    {text('text', 'Jane Doe')}
  </Chip>
));

stories.add('Javascript Plugin', () => (
  <Fragment>
    <p>
      To add tags, just enter your tag text and press enter. You can delete them
      by clicking on the close icon or by using your delete button.
    </p>
    <Chip options={{}} />

    <p>Set initial tags.</p>

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

    <p>Use placeholders and override hint texts.</p>

    <Chip
      options={{
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag'
      }}
    />

    <p>Use autocomplete with chips.</p>

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
  </Fragment>
));
