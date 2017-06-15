/* global describe, it, expect, context, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Input from '../src/Input';
import Icon from '../src/Icon';

describe('<Input />', () => {
  it('renders a text input by default', () => {
    let wrapper = shallow(<Input />);
    expect(wrapper.find('input').prop('type')).to.equal('text');
  });

  context('#text', () => {
    let wrapper;
    const className = 'my-custom-class';
    wrapper = shallow(<Input className={className} />);

    it('renders an input with a custom className', () => {
      expect(wrapper.find('input').hasClass(className)).to.equal(true);
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
        <Input type='select' defaultValue='v'>
          {values.map((val) => <option value={val} />)}
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
});
