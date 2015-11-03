describe('Panel', function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
      TestUtils = require('react-addons-test-utils'),
      Panel = require('../src/Panel'),
      instance = null;

  it('has card-panel class', function() {
      instance = TestUtils.renderIntoDocument(<Panel />);
      assert.include(ReactDOM.findDOMNode(instance).className, 'card-panel');
  });
});
