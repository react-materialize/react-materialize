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

  it('adds btn class to anchor', function() {
    expect(instance.getDOMNode().className).toContain('btn');
  });

});
