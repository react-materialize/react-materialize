import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../src/Modal';
import mocker from './helper/new-mocker';
import idgen from '../src/idgen';

jest.mock('../src/idgen');

describe('<Modal />', () => {
  let wrapper;
  const modalOpenMock = jest.fn();
  const modalCloseMock = jest.fn();
  const modalInitMock = jest.fn();
  const modalInstanceDestroyMock = jest.fn();
  const modalMock = {
    init: (el, options) => {
      modalInitMock(options);
      return {
        open: modalOpenMock,
        close: modalCloseMock,
        destroy: modalInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Modal', modalMock);
  idgen.mockReturnValue(1);

  afterAll(() => {
    restore();
    idgen.restore();
  });

  const trigger = <button>click</button>;
  const children = (
    <div>
      <h1>Hello</h1>
    </div>
  );
  const header = 'Modal header';
  const options = {
    dismissible: true,
    opacity: 0.4
  };

  let renderedWrapper;

  describe('initialises', () => {
    beforeEach(() => {
      modalInitMock.mockClear();
    });

    test('calls Modal', () => {
      shallow(<Modal />);

      expect(modalInitMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('renders a modal', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal trigger={trigger} options={options} header={header}>
          {children}
        </Modal>
      );

      renderedWrapper = document.body.lastElementChild.innerHTML;
    });

    afterEach(() => {
      modalInitMock.mockClear();
    });

    test('has children', () => {
      expect(renderedWrapper).toContain(header);
      expect(wrapper).toMatchSnapshot();
    });

    test('has a footer', () => {
      expect(renderedWrapper).toContain('modal-footer');
    });
  });

  describe('without a trigger', () => {
    beforeEach(() => {
      wrapper = mount(<Modal options={options}>{children}</Modal>);
    });

    afterEach(() => {
      modalInitMock.mockClear();
      document.body.removeChild(document.body.lastElementChild);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(Modal)).toHaveLength(1);
    });
  });

  describe('controlled modal with `open` prop', () => {
    beforeEach(() => {
      // initially set to open
      wrapper = shallow(<Modal open>{children}</Modal>);
    });

    afterEach(() => {
      modalInitMock.mockClear();
    });

    test('calls `open` on mount', () => {
      expect(modalOpenMock).toHaveBeenCalledTimes(1);
    });

    test('open on prop change', () => {
      wrapper.setProps({ open: false });
      // called once when mounted to `open` and once
      // after new props to close
      expect(modalOpenMock).toHaveBeenCalledTimes(2);
    });
  });

  describe('renders a trigger', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal trigger={trigger} options={options} header={header}>
          {children}
        </Modal>
      );
    });

    afterEach(() => {
      modalInitMock.mockClear();
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('initializes with options', () => {
      expect(modalInitMock).toHaveBeenCalledWith(options);
    });
  });
});
