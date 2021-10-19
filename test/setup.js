import idgen from '../src/idgen';

import 'mutationobserver-shim';

jest.mock('../src/idgen', () => jest.fn(() => 'mockId'));

global.M = require('materialize-css');
