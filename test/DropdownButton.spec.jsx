import React from 'react';
// import { shallow, mount } from 'enzyme';
import Dropdown from '../src/Dropdown';
import Divider from '../src/Divider';
import mocker from './helper/new-mocker';

describe.skip('<Dropdown />', () => {
  let wrapper;

  test('renders', () => {
    wrapper = shallow(<Dropdown trigger={<button>Drop me!</button>} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('does correctly render dividers', () => {
    wrapper = shallow(
      <Dropdown trigger={<span>hi</span>}>
        <a href="#">test</a>
        <Divider />
        <a href="#">test</a>
      </Dropdown>
    );
    wrapper.render();
    expect(wrapper.contains(<li className="divider" tanIndex="-1" />));
  });

  test('renders inline conditionals, normal links, and li nodes', () => {
    // noinspection PointlessBooleanExpressionJS
    wrapper = shallow(
      <Dropdown trigger={<span>hi</span>}>
        {false && <a href={'#'}>Do Not Show Me</a>}
        <a href={'#'}>Show Me</a>
        <Divider />
        <li>
          <a href={'#'}>No Additional Wrapper</a>
        </li>
      </Dropdown>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a single element', () => {
    wrapper = shallow(
      <Dropdown trigger={<span>hi</span>}>
        <a href={'#'}>I'm a Link</a>
      </Dropdown>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders fragments with other children', () => {
    wrapper = shallow(
      <Dropdown trigger={<span>hi</span>}>
        <React.Fragment>
          <a href={'#'}>One</a>
          <a href={'#'}>Two</a>
        </React.Fragment>
        <a href={'#'}>Three</a>
      </Dropdown>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a single-child fragment', () => {
    wrapper = shallow(
      <Dropdown trigger={<span>hi</span>}>
        <React.Fragment>
          <a href={'#'}>Fragment</a>
        </React.Fragment>
      </Dropdown>
    );
    expect(wrapper).toMatchSnapshot();
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

    test('with default options if none are given', () => {
      wrapper = mount(<Dropdown trigger={<button>Drop me!</button>} />);
      expect(dropdownInitMock).toHaveBeenCalledWith({
        alignment: 'left',
        autoTrigger: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        closeOnClick: true,
        hover: false,
        inDuration: 150,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
      });
    });

    test('handles options prop', () => {
      const options = { constrainWidth: true };
      wrapper = mount(
        <Dropdown trigger={<button>Drop me!</button>} options={options} />
      );
      expect(dropdownInitMock).toHaveBeenCalledWith(options);
    });

    test('should destroy when unmounted', () => {
      const options = { constrainWidth: true };
      wrapper = mount(
        <Dropdown trigger={<button>Drop me!</button>} options={options} />
      );
      wrapper.unmount();
      expect(dropdownInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });
  });
});
