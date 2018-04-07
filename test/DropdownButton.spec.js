import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../src/Dropdown';
import mocker from './helper/mocker';

describe('<Dropdown />', () => {
  let wrapper;
  const dropdownMock = jest.fn();
  const restore = mocker('dropdown', dropdownMock);

  afterAll(() => {
    restore();
  });

  test('renders', () => {
    wrapper = shallow(<Dropdown trigger={<button>Drop me!</button>} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles options prop', () => {
    const options = { constrainWidth: true };
    wrapper = shallow(
      <Dropdown trigger={<button>Drop me!</button>} options={options} />
    );
    expect(dropdownMock).toHaveBeenCalledWith(options);
  });

  test('deletes unwatend props', () => {
    const options = { hover: true };
    wrapper = shallow(<Dropdown trigger={<span>hi</span>} options={options} />);
    expect(wrapper.find('ul').props()).not.toMatchObject(options);
  });

  test('does not update ID reference with each render', () => {
    wrapper = shallow(<Dropdown trigger={<span>hi</span>} />);
    const { idx } = wrapper.instance();
    wrapper.render();
    expect(wrapper.instance().idx).toEqual(idx);
  });
});
