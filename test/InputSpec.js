/* global describe, it, expect, context, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Input from '../src/Input';
import Icon from '../src/Icon';

describe('<Input />', () => {
  it('renders a text input by default', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').prop('type')).to.equal('text');
  });

  context('#text', () => {
    const className = 'my-custom-class';
    const wrapper = shallow(<Input className={className} />);

    it('renders an input with a custom className', () => {
      expect(wrapper.find('input').hasClass(className)).to.equal(true);
    });
  });

  context('#text with value', () => {
    it('renders an input with value of string type', () => {
      const value = 'Some value';
      const wrapper = shallow(<Input value={value} />);
      expect(wrapper.find('input').prop('value')).to.equal(value);
    });

    it('renders an input with value of array type', () => {
      const values = [1, 2, 3];
      const wrapper = shallow(<Input type='file' multiple value={values} />);
      expect(wrapper.find('input').prop('value')).to.equal(values);
    });
  });

  context('#text with label', () => {
    const labelClassName = 'my-custom-class';
    const wrapper = shallow(
      <Input label='Name' labelClassName={labelClassName} />
    );
    const label = wrapper.find('label');
    const input = wrapper.find('input');

    it('renders an input with a label', () => {
      expect(label.length).to.eql(1);
      expect(input.length).to.eql(1);
      expect(input.prop('id')).to.eql(label.prop('htmlFor'));
      expect(label.hasClass(labelClassName)).to.eql(true);
    });
  });

  context('#textarea', () => {
    let wrapper;
    const textareaClass = 'materialize-textarea';
    beforeEach(() => {
      wrapper = shallow(<Input type='textarea' />);
    });

    it('renders a textarea', () => {
      expect(wrapper.find('textarea')).to.have.length(1);
    });

    it(`contains a ${textareaClass} class`, () => {
      expect(wrapper.find('textarea').hasClass(textareaClass)).to.equal(true);
    });
  });

  context('#select', () => {
    let wrapper;
    const values = [1, 2, 3, 4, 5];

    beforeEach(() => {
      wrapper = mount(
        <Input type='select' defaultValue='v' icon='weekend'>
          {values.map((val) => <option key={val} value={val} />)}
        </Input>
      );
    });

    it('renders a select element', () => {
      expect(wrapper.find('select')).to.have.length(1);
    });

    it('renders a options', () => {
      expect(wrapper.find('option').length).to.equal(values.length);
    });

    it('sets the isSelect to true', () => {
      expect(wrapper.instance().isSelect()).to.equal(true);
    });

    it('renders an icon child with prefix class', () => {
      expect(wrapper.find(Icon).hasClass('prefix')).to.equal(true);
    });

    context('without icon', () => {
      it('does not render with an icon child', () => {
        const component = mount(
          <Input type='select' defaultValue='v'>
            <option value='v' />
          </Input>
        );

        expect(component.find(Icon).exists()).to.equal(false);
      });
    });

    context('with placeholder', () => {
      const defaultOption = 'Choose your option';

      it('renders placeholder as the default disabled option for select', () => {
        wrapper = mount(
          <Input type='select' placeholder={defaultOption}>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </Input>
        );

        expect(wrapper.find('option')).to.have.length(4);
        expect(wrapper.find('option').first().text()).to.equal(defaultOption);
      });
    });

    context('with multiple', () => {
      it('renders a select with multiple', () => {
        let defaultOption = 'Choose your option';
        wrapper = mount(
          <Input type='select' multiple placeholder={defaultOption}>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </Input>
        );

        expect(wrapper.find('select').prop('multiple')).to.equal(true);
      });
    });

    context('with only one option', () => {
      it('renders a select with only one option', () => {
        let options = [<option value='1' key='1' >Option 1</option>];
        wrapper = mount(
          <Input type='select' defaultValue='v'>
            { options }
          </Input>
        );

        expect(wrapper.find('select')).to.have.length(1);
        expect(wrapper.find('option').length).to.equal(options.length);
      });
    });
  });

  context('#switch', () => {
    const offLabel = 'No';
    const onLabel = 'Yes';

    let wrapper = shallow(
      <Input type='switch' onLabel={onLabel} offLabel={offLabel} />
    );

    it('renders a switch', () => {
      expect(wrapper.hasClass('switch')).to.equal(true);
    });

    it('renders a custom label', () => {
      expect(wrapper.find('label').text()).to.contain(onLabel);
      expect(wrapper.find('label').text()).to.contain(offLabel);
    });

    it('renders a lever', () => {
      expect(wrapper.find('.lever').length).to.equal(1);
    });
  });

  context('#datepicker', () => {
    it('renders a datepicker', () => {
      const pickadateStub = sinon.stub($.fn, 'pickadate');
      const options = { one: 'two' };
      mount(<Input type='date' options={options} />);

      expect(pickadateStub).to.have.been.calledWith(options);
      pickadateStub.restore();
    });

    it('renders a datepicker with icon', () => {
      const wrapper = mount(<Input type='date'><Icon>today</Icon></Input>);

      expect(wrapper.find('i').hasClass('prefix')).to.equal(true);
    });

    it('renders a datepicker without icon', () => {
      const wrapper = mount(<Input type='date' />);

      expect(wrapper.find('i').exists()).to.equal(false);
    });
  });

  context('#timepicker', () => {
    it('renders a timepicker', () => {
      const pickatimeStub = sinon.stub($.fn, 'pickatime');
      const options = { one: 'two' };
      mount(<Input type='time' options={options} />);

      expect(pickatimeStub).to.have.been.calledWith(options);
      pickatimeStub.restore();
    });

    it('renders a timepicker with icon', () => {
      const wrapper = mount(<Input type='time'><Icon>today</Icon></Input>);

      expect(wrapper.find('i').hasClass('prefix')).to.equal(true);
    });

    it('renders a timepicker without icon', () => {
      const wrapper = mount(<Input type='time' />);

      expect(wrapper.find('i').exists()).to.equal(false);
    });
  });

  context('with icon', () => {
    let wrapper;

    it('renders an icon child with prefix class', () => {
      wrapper = mount(<Input><Icon>account_circle</Icon></Input>);
      expect(wrapper.find('i').hasClass('prefix')).to.equal(true);
    });

    it('renders an icon if icon prop is defined', () => {
      wrapper = shallow(<Input icon='cloud' />);
      expect(wrapper.find(Icon).hasClass('prefix')).to.equal(true);
    });
  });

  context('whithout icon', () => {
    it('does not render an icon child if icon prop is not defined', () => {
      const wrapper = shallow(<Input />);
      expect(wrapper.find(Icon).exists()).to.equal(false);
    });
  });
});
