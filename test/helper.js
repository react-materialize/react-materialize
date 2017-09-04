require('jsdom-global')();

var chai = require('chai');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

global.expect = require('chai').expect;

global.$ = require('jquery');

global.$.fn.material_select = () => this;
global.$.fn.sideNav = () => this;
global.$.fn.collapsible = () => this;
global.$.fn.modal = () => this;
global.$.fn.pickadate = () => this;
global.$.fn.carousel = () => this;
global.$.fn.dropdown = () => this;
