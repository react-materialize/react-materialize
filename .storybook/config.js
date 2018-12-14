import { configure } from '@storybook/react';
 
global.$ = require('jquery');
global.M = require('materialize-css');

function loadStories() {
  const req = require.context('../stories', true, /.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
