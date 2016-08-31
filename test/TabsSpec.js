import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';

describe('Tabs', () => {
  it('should create list of Tab itemt', () => {
    const instance = TestUtils.renderIntoDocument(
      <Tabs>
        <Tab title='one'>One</Tab>
        <Tab title='Two'>Two</Tab>
      </Tabs>
    );
    const ul = TestUtils.findRenderedDOMComponentWithTag(instance, 'ul');
    assert.equal(ReactDOM.findDOMNode(ul).className, 'tabs');
  });
});
