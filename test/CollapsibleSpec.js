/* global describe, it, expect, context */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';

describe('<Collapsible />', () => {
  describe('default', () => {
    let wrapper = shallow(<Collapsible />);

    test('renders', () => {
      expect(wrapper.hasClass('collapsible'), 'with a collapsible class').toBe(true);
      expect(
        wrapper.find('[data-collapsible="expandable"]').length,
        'with a expandable data attribute'
      ).to.eq(1);
    });
  });

  describe('accordion', () => {
    let wrapper = shallow(<Collapsible accordion />);

    test('renders', () => {
      expect(wrapper.find('[data-collapsible="accordion"]').length).to.eq(1);
    });
  });

  describe('with invalid elements', () => {
    let wrapper = shallow(
      <Collapsible>
        {null}
        <CollapsibleItem header="First">A</CollapsibleItem>
        {null}
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    test('purges elements', () => {
      expect(wrapper.children().length).to.eq(2);
    });
  });

  describe('with expanded prop', () => {
    let wrapper = mount(
      <Collapsible>
        <CollapsibleItem expanded header="First">
          A
        </CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    test('adds active class to CollapsibleItem', () => {
      expect(
        wrapper
          .find('.collapsible-header')
          .first()
          .hasClass('active')
      ).toBe(true);
    });
  });

  describe('mounting', () => {
    let wrapper = mount(
      <Collapsible accordion>
        <CollapsibleItem header="First">A</CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    test('handles state on click', () => {
      expect(wrapper.state().activeKey).toBeUndefined();
      wrapper
        .find('.collapsible-header')
        .first()
        .simulate('click');
      expect(wrapper.state().activeKey).to.eq(0);
    });
  });

  describe('defaultActiveKey', () => {
    const activeKey = 0;
    let wrapper = mount(
      <Collapsible accordion defaultActiveKey={activeKey}>
        <CollapsibleItem header="First">A</CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    test('handles state on click', () => {
      wrapper
        .find('.collapsible-header')
        .at(0)
        .simulate('click');
      expect(wrapper.state().activeKey, 'resets').toBeNull();
      wrapper
        .find('.collapsible-header', 'activates again')
        .at(1)
        .simulate('click');
      expect(wrapper.state().activeKey).to.eq(1);
    });
  });
});
