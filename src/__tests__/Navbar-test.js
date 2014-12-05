jest.dontMock('../Navbar');

describe('Navbar', function() {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Navbar = require('../Navbar'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Navbar />);
  });

  it('should create nav element', function() {
    expect(instance.getDOMNode().nodeName).toBe('NAV');
  });
});
