import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from './theme';

import './overrides.css';

global.M = require('materialize-css');

// https://www.npmjs.com/package/@storybook/addon-info
addDecorator(withInfo({
  inline: false,
  header: false,
  source: true
}));

function loadStories() {
  const req = require.context('../stories', true, /.js$/);
  req.keys().forEach((filename) => req(filename));
}

addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {String}
     */
    panelPosition: 'right',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    showRoots: true,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: theme
  },
});

configure(loadStories, module);
