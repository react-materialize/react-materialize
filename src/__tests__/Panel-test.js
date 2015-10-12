jest.dontMock('../Panel');
jest.dontMock('classnames');

describe('Panel', function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      Panel = require('../Panel'),
      instance = null;

  it('has card-panel class', function() {
    instance = TestUtils.renderIntoDocument(<Panel />);
    expect(ReactDOM.findDOMNode(instance).className).toContain('card-panel');
  });
});
