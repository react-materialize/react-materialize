jest.dontMock('../Panel');
jest.dontMock('classnames');

describe('Panel', function() {
  var React = require('react'),
      TestUtils = require('react-addons-test-utils'),
      Panel = require('../Panel'),
      instance = null;

  it('has card-panel class', function() {
    instance = TestUtils.renderIntoDocument(<Panel />);
    expect(instance.getDOMNode().className).toContain('card-panel');
  });
});
