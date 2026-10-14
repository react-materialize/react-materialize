import idgen from '../src/idgen';

jest.mock('../src/idgen', () => jest.fn(() => 'mockId'));

global.M = require('materialize-css');
