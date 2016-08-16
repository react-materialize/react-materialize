module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jquery': true
  },
  'plugins': ['react'],
  'extends': ['eslint:recommended'],
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'rules': {
    'indent': [1, 2],
    'linebreak-style': [1,'unix'],
    'quotes': [1,'single'],
    'semi': [1,'always'],
    'no-unused-vars': 1,
    'comma-dangle': 1,
    'react/react-in-jsx-scope': 0
  },
  'globals': {
    'Materialize': true
  }
};
