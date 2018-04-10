import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.$ = require('jquery');

Enzyme.configure({ adapter: new Adapter() });
