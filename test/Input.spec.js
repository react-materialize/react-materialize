import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../src/Input';
import Icon from '../src/Icon';
import mocker from './helper/mocker';

describe('<Input />', () => {
  let wrapper;
  const pickadateMock = jest.fn();
  const pickatimeMock = jest.fn();
  const selectMock = jest.fn();

  const pickadateRestore = mocker('pickadate', pickadateMock);
  const pickatimeRestore = mocker('pickatime', pickatimeMock);
  const selectRestore = mocker('material_select', selectMock);

  afterAll(() => {
    pickadateRestore();
    pickatimeRestore();
    selectRestore();
  });

  test('renders', () => {
    wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });

  test('text input', () => {
    wrapper = shallow(<Input className="red" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('input value', () => {
    wrapper = shallow(<Input value="name" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('label', () => {
    wrapper = shallow(<Input label="Name" labelClassName="red" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('textarea', () => {
    wrapper = shallow(<Input type="textarea" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('select', () => {
    const values = [1, 2, 3, 4, 5];
    wrapper = shallow(
      <Input type="select">
        {values.map(val => <option key={val} value={val} />)}
      </Input>
    );
    expect(wrapper.instance().isSelect()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders an icon child with prefix class', () => {
    wrapper = shallow(
      <Input type="select" icon="weekend">
        <option value="yes" />
      </Input>
    );
    expect(wrapper.find(Icon).hasClass('prefix')).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('placeholder', () => {
    wrapper = shallow(
      <Input type="select" placeholder="Choose your option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Input>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('multiple select', () => {
    wrapper = shallow(
      <Input type="select" multiple placeholder="Choose your option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Input>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('switch', () => {
    const offLabel = 'No';
    const onLabel = 'Yes';
    wrapper = shallow(
      <Input type="switch" onLabel={onLabel} offLabel={offLabel} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('label').text()).toContain(onLabel);
    expect(wrapper.find('label').text()).toContain(offLabel);
  });

  test('radio', () => {
    wrapper = shallow(
      <Input name="group1" type="radio" value="yellow" label="Yellow" />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find({ checked: false })).toHaveLength(1);
  });

  test('radio checked', () => {
    wrapper = shallow(
      <Input
        name="group1"
        type="radio"
        value="yellow"
        label="Yellow"
        checked={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find({ checked: false })).toHaveLength(1);
  });

  test('radio event', () => {
    wrapper = shallow(
      <Input name="group1" type="radio" value="yellow" label="Yellow" />
    );

    expect(wrapper).toMatchSnapshot();
    wrapper
      .find('input')
      .simulate('change', { target: { type: 'radio', checked: true } });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find({ checked: true })).toHaveLength(1);
  });

  test('radio onChange', () => {
    const onChange = jest.fn();

    wrapper = shallow(
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
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').simulate('change', event);
    expect(wrapper).toMatchSnapshot();
    expect(onChange).toHaveBeenCalledWith(event, false);
  });

  test('pickadate', () => {
    const options = { one: 'two' };
    wrapper = shallow(<Input type="date" options={options} />);

    expect(pickadateMock).toHaveBeenCalledWith(options);
    expect(wrapper).toMatchSnapshot();
  });

  test('pickadate with icon', () => {
    wrapper = shallow(
      <Input type="date">
        <Icon>today</Icon>
      </Input>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('pickatime', () => {
    const options = { one: 'two' };
    wrapper = mount(<Input type="time" options={options} />);

    expect(pickatimeMock).toHaveBeenCalledWith(options);
    expect(wrapper).toMatchSnapshot();
  });

  test('file input', () => {
    wrapper = shallow(<Input type="file" label="Upload" multiple />);
    expect(wrapper).toMatchSnapshot();
  });
});
