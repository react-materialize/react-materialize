require('jsdom-global')();

var chai = require('chai');
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var sinonChai = require('sinon-chai');

Enzyme.configure({ adapter: new Adapter() });
chai.use(sinonChai);

global.expect = require('chai').expect;

global.$ = require('jquery');

global.$.fn.material_select = () => this;
global.$.fn.sideNav = () => this;
global.$.fn.collapsible = () => this;
global.$.fn.materialbox = () => this;
global.$.fn.parallax = () => this;
global.$.fn.slider = () => this;
global.$.fn.tabs = () => this;
global.$.fn.modal = () => this;
global.$.fn.pickadate = () => this;
global.$.fn.carousel = () => this;
global.$.fn.dropdown = () => this;
