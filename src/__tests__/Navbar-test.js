jest.dontMock('../Navbar');

describe('Navbar', function() {
  var React = require('react'),
      TestUtils = require('react-addons-test-utils'),
      Navbar = require('../Navbar'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Navbar />);
  });

  it('should create nav element', function() {
    expect(instance.getDOMNode().nodeName).toBe('NAV');
  });
});
