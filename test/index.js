import 'es5-shim';
// ensure all files in src folder are loaded for proper code coverage analysis
const srcContext = require.context('../src', true, /.*\.js$/);
srcContext.keys().forEach(srcContext);

const testsContext = require.context('.', true, /.*?Spec.js$/);
testsContext.keys().forEach(testsContext);
