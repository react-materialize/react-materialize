import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Breadcrumb from '../src/Breadcrumb';
import MenuItem from '../src/MenuItem';

describe('Breadcrumb', () => {
  it('should create nav element', () => {
    const instance = TestUtils.renderIntoDocument(
      <Breadcrumb>
        <MenuItem>first</MenuItem>
        <MenuItem>first</MenuItem>
        <MenuItem>first</MenuItem>
      </Breadcrumb>
    );
    const nav = TestUtils.findRenderedDOMComponentWithTag(instance, 'nav');
    assert.equal(ReactDOM.findDOMNode(nav).className, 'row');
  });
});
