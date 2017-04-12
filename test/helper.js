require('jsdom-global')();

global.expect = require('chai').expect;

global.$ = require('jquery');

global.$.fn.material_select = () => this;
global.$.fn.sideNav = () => this;
global.$.fn.modal = () => this;
