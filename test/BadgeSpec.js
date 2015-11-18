import 'es5-shim';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Badge from '../src/Badge';

describe('Badge', () => {
  it('should output a badge with the className of `badge`', () => {
    let badge = TestUtils.renderIntoDocument(<Badge>4</Badge>);
    assert.equal(ReactDOM.findDOMNode(badge).className, 'badge');
  });

  it('should output a badge with just the number 4 in it', () => {
    let badge = TestUtils.renderIntoDocument(<Badge>4</Badge>);
    assert.equal(ReactDOM.findDOMNode(badge).innerHTML, '4');
  });

  it('should output a badge with the className of `badge new` and', () => {
    let badge = TestUtils.renderIntoDocument(<Badge newIcon={true}>4</Badge>);
    assert.include(ReactDOM.findDOMNode(badge).className, 'badge');
    assert.include(ReactDOM.findDOMNode(badge).className, 'new');
  });
});
