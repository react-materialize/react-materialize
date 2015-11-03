import 'es5-shim';
// ensure all files in src folder are loaded for proper code coverage analysis
const srccontext = require.context('../src', true, /.*\.js$/);
srccontext.keys().forEach(srccontext);

const testscontext = require.context('.', true, /.*?Spec.js$/);
testscontext.keys().forEach(testscontext);
