require('jsdom-global')();

global.expect = require('chai').expect;
global.sinon = require('sinon');

global.$ = require('jquery');

global.$.fn.material_select = () => this;
global.$.fn.sideNav = () => this;
