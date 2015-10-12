jest.dontMock('../Navbar');

describe('Navbar', function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      Navbar = require('../Navbar'),
      instance = null;

  it('should create nav element', function() {
      //instance = TestUtils.renderIntoDocument(<Navbar />);
      //expect(ReactDOM.findDOMNode(instance).nodeName).toBe('NAV');
  });
});
