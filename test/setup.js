import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import idgen from '../src/idgen';

jest.mock('../src/idgen', () => () => 'mockId');

global.$ = require('jquery');

Enzyme.configure({ adapter: new Adapter() });
