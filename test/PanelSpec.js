import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Panel from '../src/Panel';

describe('Panel', function() {
  it('has card-panel class', function() {
      let instance = TestUtils.renderIntoDocument(<Panel />);
      assert.include(ReactDOM.findDOMNode(instance).className, 'card-panel');
  });
});
