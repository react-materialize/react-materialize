/** @jsx React.DOM */

jest.dontMock('../Button');
describe('Button', function() {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Button = require('../Button'),
      instance = null;

  beforeEach(function() {
    instance = TestUtils.renderIntoDocument(<Button waves='effect light'>Stuff</Button>);
  });

  it('should output a button', function() {
    expect(instance.getDOMNode().nodeName).toBe('BUTTON');
  });

});
