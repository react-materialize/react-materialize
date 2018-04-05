/* global describe, it, expect, context, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Input from '../src/Input';
import Icon from '../src/Icon';

describe('<Input />', () => {
  test('renders a text input by default', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').prop('type')).toBe('text');
  });

  describe('#text', () => {
    const className = 'my-custom-class';
    const wrapper = shallow(<Input className={className} />);

    test('renders an input with a custom className', () => {
      expect(wrapper.find('input').hasClass(className)).toBe(true);
    });
  });

  describe('#text with value', () => {
    test('renders an input with value of string type', () => {
      const value = 'Some value';
      const wrapper = shallow(<Input value={value} />);
      expect(wrapper.find('input').prop('value')).toBe(value);
    });

    test('renders an input with value of array type', () => {
      const values = [1, 2, 3];
      const wrapper = shallow(<Input type="file" multiple value={values} />);
      expect(wrapper.find('input').prop('value')).toBe(values);
    });
  });

  describe('#text with label', () => {
    const labelClassName = 'my-custom-class';
    const wrapper = shallow(
      <Input label="Name" labelClassName={labelClassName} />
    );
    const label = wrapper.find('label');
    const input = wrapper.find('input');

    test('renders an input with a label', () => {
      expect(label.length).toEqual(1);
      expect(input.length).toEqual(1);
      expect(input.prop('id')).toEqual(label.prop('htmlFor'));
      expect(label.hasClass(labelClassName)).toEqual(true);
    });
  });

  describe('#textarea', () => {
    let wrapper;
    const textareaClass = 'materialize-textarea';
    beforeEach(() => {
      wrapper = shallow(<Input type="textarea" />);
    });

    test('renders a textarea', () => {
      expect(wrapper.find('textarea')).toHaveLength(1);
    });

    test(`contains a ${textareaClass} class`, () => {
      expect(wrapper.find('textarea').hasClass(textareaClass)).toBe(true);
    });
  });

  describe('#select', () => {
    let wrapper;
    const values = [1, 2, 3, 4, 5];

    beforeEach(() => {
      wrapper = mount(
        <Input type="select" defaultValue="v" icon="weekend">
          {values.map(val => <option key={val} value={val} />)}
        </Input>
      );
    });

    test('renders a select element', () => {
      expect(wrapper.find('select')).toHaveLength(1);
    });

    test('renders a options', () => {
      expect(wrapper.find('option').length).toBe(values.length);
    });

    test('sets the isSelect to true', () => {
      expect(wrapper.instance().isSelect()).toBe(true);
    });

    test('renders an icon child with prefix class', () => {
      expect(wrapper.find(Icon).hasClass('prefix')).toBe(true);
    });

    describe('without icon', () => {
      test('does not render with an icon child', () => {
        const component = mount(
          <Input type="select" defaultValue="v">
            <option value="v" />
          </Input>
        );

        expect(component.find(Icon).exists()).toBe(false);
      });
    });

    describe('with placeholder', () => {
      const defaultOption = 'Choose your option';

      test('renders placeholder as the default disabled option for select', () => {
        wrapper = mount(
          <Input type="select" placeholder={defaultOption}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>
        );

        expect(wrapper.find('option')).toHaveLength(4);
        expect(
          wrapper
            .find('option')
            .first()
            .text()
        ).toBe(defaultOption);
      });
    });

    describe('with multiple', () => {
      test('renders a select with multiple', () => {
        let defaultOption = 'Choose your option';
        wrapper = mount(
          <Input type="select" multiple placeholder={defaultOption}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Input>
        );

        expect(wrapper.find('select').prop('multiple')).toBe(true);
      });
    });

    describe('with only one option', () => {
      test('renders a select with only one option', () => {
        let options = [
          <option value="1" key="1">
            Option 1
          </option>
        ];
        wrapper = mount(
          <Input type="select" defaultValue="v">
            {options}
          </Input>
        );

        expect(wrapper.find('select')).toHaveLength(1);
        expect(wrapper.find('option').length).toBe(options.length);
      });
    });
  });

  describe('#switch', () => {
    const offLabel = 'No';
    const onLabel = 'Yes';

    let wrapper = shallow(
      <Input type="switch" onLabel={onLabel} offLabel={offLabel} />
    );

    test('renders a switch', () => {
      expect(wrapper.hasClass('switch')).toBe(true);
    });

    test('renders a custom label', () => {
      expect(wrapper.find('label').text()).toContain(onLabel);
      expect(wrapper.find('label').text()).toContain(offLabel);
    });

    test('renders a lever', () => {
      expect(wrapper.find('.lever').length).toBe(1);
    });
  });

  describe('#radio', () => {
    test('no checked should render checked=false', () => {
      let wrapper = shallow(
        <Input name="group1" type="radio" value="yellow" label="Yellow" />
      );

      expect(wrapper.find({ checked: false })).toHaveLength(1);
    });

    test('checked=false should render checked=false', () => {
      let wrapper = shallow(
        <Input
          name="group1"
          type="radio"
          value="yellow"
          label="Yellow"
          checked={false}
        />
      );

      expect(wrapper.find({ checked: false })).toHaveLength(1);
    });

    test('empty checked should render checked=true', () => {
      let wrapper = shallow(
        <Input
          name="group1"
          type="radio"
          value="yellow"
          label="Yellow"
          checked
        />
      );

      expect(wrapper.find({ checked: true })).toHaveLength(1);
    });

    test('after change event checked should be toggle', () => {
      let wrapper = shallow(
        <Input name="group1" type="radio" value="yellow" label="Yellow" />
      );

      wrapper
        .find('input')
        .simulate('change', { target: { type: 'radio', checked: true } });

      expect(wrapper.find({ checked: true })).toHaveLength(1);
    });

    test('after change event should call onChange with valid arg', () => {
      const onChange = sinon.spy();

      let wrapper = shallow(
        <Input
          name="group1"
          type="radio"
          value="yellow"
          label="Yellow"
          onChange={onChange}
        />
      );

      const event = { target: { type: 'radio', checked: true } };
      wrapper.find('input').simulate('change', event);

      expect(onChange).to.have.been.calledWith(event, true);
    });

    test('after change event false should call onChange with valid arg', () => {
      const onChange = sinon.spy();

      let wrapper = shallow(
        <Input
          name="group1"
          type="radio"
          value="yellow"
          checked
          label="Yellow"
          onChange={onChange}
        />
      );

      const event = { target: { type: 'radio', checked: false } };
      wrapper.find('input').simulate('change', event);

      expect(onChange).to.have.been.calledWith(event, false);
    });
  });

  describe('#datepicker', () => {
    test('renders a datepicker', () => {
      const pickadateStub = sinon.stub($.fn, 'pickadate');
      const options = { one: 'two' };
      mount(<Input type="date" options={options} />);

      expect(pickadateStub).to.have.been.calledWith(options);
      pickadateStub.restore();
    });

    test('renders a datepicker with icon', () => {
      const wrapper = mount(
        <Input type="date">
          <Icon>today</Icon>
        </Input>
      );

      expect(wrapper.find('i').hasClass('prefix')).toBe(true);
    });

    test('renders a datepicker without icon', () => {
      const wrapper = mount(<Input type="date" />);

      expect(wrapper.find('i').exists()).toBe(false);
    });
  });

  describe('#timepicker', () => {
    test('renders a timepicker', () => {
      const pickatimeStub = sinon.stub($.fn, 'pickatime');
      const options = { one: 'two' };
      mount(<Input type="time" options={options} />);

      expect(pickatimeStub).to.have.been.calledWith(options);
      pickatimeStub.restore();
    });

    test('renders a timepicker with icon', () => {
      const wrapper = mount(
        <Input type="time">
          <Icon>today</Icon>
        </Input>
      );

      expect(wrapper.find('i').hasClass('prefix')).toBe(true);
    });

    test('renders a timepicker without icon', () => {
      const wrapper = mount(<Input type="time" />);

      expect(wrapper.find('i').exists()).toBe(false);
    });
  });

  describe('with icon', () => {
    let wrapper;

    test('renders an icon child with prefix class', () => {
      wrapper = mount(
        <Input>
          <Icon>account_circle</Icon>
        </Input>
      );
      expect(wrapper.find('i').hasClass('prefix')).toBe(true);
    });

    test('renders an icon if icon prop is defined', () => {
      wrapper = shallow(<Input icon="cloud" />);
      expect(wrapper.find(Icon).hasClass('prefix')).toBe(true);
    });
  });

  describe('whithout icon', () => {
    test('does not render an icon child if icon prop is not defined', () => {
      const wrapper = shallow(<Input />);
      expect(wrapper.find(Icon).exists()).toBe(false);
    });
  });
});
