import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../src/Dropdown';
import Divider from '../src/Divider';
import mocker from './helper/new-mocker';

describe('<Dropdown />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Dropdown trigger={<button>Drop me!</button>} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('does not update ID reference with each render', () => {
    wrapper = shallow(<Dropdown trigger={<span>hi</span>} />);
    const { idx } = wrapper.instance();
    wrapper.render();
    expect(wrapper.instance().idx).toEqual(idx);
  });

  test('does correctly render dividers', () => {
    wrapper = shallow(
      <Dropdown trigger={<span>hi</span>}>
        <a href="#">test</a>
        <Divider />
        <a href="#">test</a>
      </Dropdown>
    );
    const { idx } = wrapper.instance();
    wrapper.render();
    expect(wrapper.contains(<li className="divider" tanIndex="-1" />));
  });

  test('deletes unwatend props', () => {
    const options = { hover: true };
    wrapper = shallow(<Dropdown trigger={<span>hi</span>} options={options} />);
    expect(wrapper.find('ul').props()).not.toMatchObject(options);
  });

  describe('initializes', () => {
    const dropdownInitMock = jest.fn();
    const dropdownInstanceDestroyMock = jest.fn();
    const dropdownMock = {
      init: (el, options) => {
        dropdownInitMock(options);
        return { destroy: dropdownInstanceDestroyMock };
      }
    };

    const restore = mocker('Dropdown', dropdownMock);

    beforeEach(() => {
      dropdownInitMock.mockClear();
      dropdownInstanceDestroyMock.mockClear();
    });

    afterAll(() => {
      restore();
    });

    test('handles options prop', () => {
      const options = { constrainWidth: true };
      wrapper = shallow(
        <Dropdown trigger={<button>Drop me!</button>} options={options} />
      );
      expect(dropdownInitMock).toHaveBeenCalledWith(options);
    });
  });
});
