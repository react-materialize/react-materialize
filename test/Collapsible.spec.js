import React from 'react';
import { shallow, mount } from 'enzyme';
import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';
import mocker from './helper/new-mocker';

describe('<Collapsible />', () => {
  let wrapper;
  const collapsibleInitMock = jest.fn();
  const collapsibleInstanceDestroyMock = jest.fn();
  const collapsibleMock = {
    init: (el, options) => {
      collapsibleInitMock(options);
      return {
        destroy: collapsibleInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Collapsible', collapsibleMock);

  const options = {
    onOpenStart: () => {},
    inDuration: 100,
    outDuration: 50
  };

  beforeEach(() => {
    collapsibleInitMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('initializes Collapsible with options', () => {
    wrapper = shallow(<Collapsible options={options} />);
    expect(collapsibleInitMock).toHaveBeenCalledWith(options);
  });

  test('Destroyed when unmounted', () => {
    wrapper = shallow(<Collapsible options={options} />);
    wrapper.unmount();
    expect(collapsibleInstanceDestroyMock).toHaveBeenCalled();
  });

  test('renders', () => {
    wrapper = shallow(<Collapsible />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with accordion', () => {
    wrapper = shallow(<Collapsible accordion />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with invalid elements', () => {
    wrapper = shallow(
      <Collapsible>
        {null}
        <CollapsibleItem header="First">A</CollapsibleItem>
        {null}
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.children().length).toEqual(2);
  });

  test('with expanded prop', () => {
    wrapper = mount(
      <Collapsible>
        <CollapsibleItem expanded header="First">
          A
        </CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('updates activeKey', () => {
    wrapper = mount(
      <Collapsible accordion>
        <CollapsibleItem header="A">A</CollapsibleItem>
        <CollapsibleItem header="B">B</CollapsibleItem>
        <CollapsibleItem header="C">C</CollapsibleItem>
        <CollapsibleItem header="D">D</CollapsibleItem>
        <CollapsibleItem header="E">E</CollapsibleItem>
      </Collapsible>
    );

    expect(wrapper.state().activeKey).toBeUndefined();
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find('.collapsible-header')
      .at(3)
      .simulate('click');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().activeKey).toEqual(3);
  });

  test('defaultActiveKey', () => {
    const activeKey = 0;
    wrapper = mount(
      <Collapsible accordion defaultActiveKey={activeKey}>
        <CollapsibleItem header="First">A</CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    wrapper
      .find('.collapsible-header')
      .at(0)
      .simulate('click');
    expect(wrapper.state().activeKey).toBeNull();
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find('.collapsible-header')
      .at(1)
      .simulate('click');
    expect(wrapper.state().activeKey).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('onSelect with right called with right argument', () => {
    const onSelect = jest.fn();
    wrapper = mount(
      <Collapsible accordion onSelect={onSelect}>
        <CollapsibleItem header="A">A</CollapsibleItem>
        <CollapsibleItem header="B">B</CollapsibleItem>
        <CollapsibleItem header="C">C</CollapsibleItem>
        <CollapsibleItem header="D">D</CollapsibleItem>
        <CollapsibleItem header="E">E</CollapsibleItem>
      </Collapsible>
    );

    const clickedIndex = 3;
    wrapper
      .find('.collapsible-header')
      .at(clickedIndex)
      .simulate('click');
    expect(onSelect).toHaveBeenCalledWith(clickedIndex);
  });
});
