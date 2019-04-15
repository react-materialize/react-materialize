import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from '../src/Checkbox';
import idgen from '../src/idgen';

jest.mock('../src/idgen');

describe('<Checkbox />', () => {
  let wrapper;

  beforeEach(() => {
    idgen.mockClear();
  });

  test('renders', () => {
    wrapper = shallow(<Checkbox value="red" label="red" />);
    expect(idgen).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders disabled', () => {
    wrapper = shallow(<Checkbox value="red" label="red" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  test('filled-in', () => {
    wrapper = shallow(<Checkbox value="red" label="red" filledIn />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with id', () => {
    wrapper = shallow(<Checkbox value="red" label="red" id="test" />);
    expect(idgen).not.toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  test('with indeterminate', () => {
    wrapper = shallow(<Checkbox value="red" label="red" indeterminate />);
    expect(wrapper).toMatchSnapshot();
  });

  test('does not overwrite materialize-css classnames', () => {
    wrapper = mount(
      <Checkbox value="red" label="red" filledIn className="my-class" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
