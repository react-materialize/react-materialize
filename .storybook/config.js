import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

import './overrides.css';

global.$ = require('jquery');
global.M = require('materialize-css');

// https://www.npmjs.com/package/@storybook/addon-info
addDecorator(withInfo({
  inline: false,
  header: false,
  source: true
}));

// https://www.npmjs.com/package/@storybook/addon-options
addDecorator(
  withOptions({
    name: 'react-materialize',
    url: 'http://react-materialize.github.io',
    showAddonPanel: false,
  })
);

function loadStories() {
  const req = require.context('../stories', true, /.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
