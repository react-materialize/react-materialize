/* global describe, it, context, expect, beforeEach, afterEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';

describe('Tabs', () => {
  let wrapper;
  let tabsStub;
  const options = {
    onShow: true,
    swipeable: true,
    responsiveThreshold: 2
  };

  wrapper = shallow(
    <Tabs>
      <Tab title="one">One</Tab>
      <Tab title="Two">Two</Tab>
    </Tabs>
  );

  it('should create list of Tab itemt', () => {
    assert(wrapper.find('ul.tabs'));
  });

  context('with options', () => {
    beforeEach(() => {
      tabsStub = sinon.stub($.fn, 'tabs');
      wrapper = mount(
        <Tabs tabOptions={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
    });
    afterEach(() => {
      tabsStub.restore();
    });

    it('initializes Tabs with options', () => {
      expect(tabsStub).to.have.been.calledWithExactly(options);
    });
  });

  context('when updated', () => {
    beforeEach(() => {
      tabsStub = sinon.stub($.fn, 'tabs');
      wrapper = mount(
        <Tabs tabOptions={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
    });
    afterEach(() => {
      tabsStub.restore();
    });

    it('should re-initialize with options', () => {
      expect(tabsStub).to.have.been.calledOnce;
      wrapper.setProps({ className: 'test' });
      expect(tabsStub).to.have.been.called;
    });
  });
});
