import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import idgen from '../src/idgen';

jest.mock('../src/idgen', () => jest.fn(() => 'mockId'));

global.$ = require('jquery');
global.M = require('materialize-css');

Enzyme.configure({ adapter: new Adapter() });
