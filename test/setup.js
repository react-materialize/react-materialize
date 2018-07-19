import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.$ = require('jquery');
window.Hammer = require('materialize-css/js/hammer.min.js');
global.M = require('materialize-css');

Enzyme.configure({ adapter: new Adapter() });
