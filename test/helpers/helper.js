const exposedProperties = ['window', 'navigator', 'document'];

const expect = require('chai').expect;
const jsdom = require('jsdom').jsdom;
global.sinon = require('sinon');
global.jsdom = jsdom.jsdom;
global.React = require('react');
global.ReactDOM = require('react-dom');
global.TestUtils = require('react-addons-test-utils');
global.expect = expect;

global.document = jsdom('');
global.window = document.defaultView;

global.$ = require('jquery');
global.$.fn.material_select = () => this;
global.$.fn.sideNav = () => this;

Object.keys(document.defaultView).forEach(
  (property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  }
);

global.navigator = {
  userAgent: 'Node.js'
};
