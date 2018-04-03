require("jsdom-global")();

var chai = require("chai");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

// Setup Enzyme for react16
var enzyme = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

global.expect = require("chai").expect;
global.$ = require("jquery");

global.$.fn.material_select = () => this;
global.$.fn.materialbox = () => this;
global.$.fn.parallax = () => this;
global.$.fn.slider = () => this;
global.$.fn.tabs = () => this;
global.$.fn.sideNav = () => this;
global.$.fn.collapsible = () => this;
global.$.fn.modal = () => this;
global.$.fn.pickadate = () => this;
global.$.fn.pickatime = () => this;
global.$.fn.carousel = () => this;
global.$.fn.dropdown = () => this;
