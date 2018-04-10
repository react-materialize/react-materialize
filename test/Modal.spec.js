import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../src/Modal';
import mocker from './helper/mocker';

describe('<Modal />', () => {
  let wrapper;
  const modalMock = jest.fn();
  const restore = mocker('modal', modalMock);

  afterAll(() => {
    restore();
  });

  const trigger = <button>click</button>;
  const children = (
    <div>
      <h1>Hello</h1>
    </div>
  );
  const header = 'Modal header';
  const modalOptions = {
    dismissible: true,
    opacity: 0.4
  };

  let renderedWrapper;

  describe('renders a modal', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal trigger={trigger} modalOptions={modalOptions} header={header}>
          {children}
        </Modal>
      );

      renderedWrapper = document.body.lastElementChild.innerHTML;
    });

    afterEach(() => {
      modalMock.mockClear();
      document.body.removeChild(document.body.lastElementChild);
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
      wrapper = mount(<Modal modalOptions={modalOptions}>{children}</Modal>);
    });

    afterEach(() => {
      modalMock.mockClear();
      document.body.removeChild(document.body.lastElementChild);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(Modal).length).toEqual(1);
    });
  });

  describe('controlled modal with `open` prop', () => {
    let testModal;
    beforeEach(() => {
      testModal = shallow(
        <Modal modalOptions={{ one: 1 }} open>
          {children}
        </Modal>
      );
    });

    afterEach(() => {
      modalMock.mockClear();
      document.body.removeChild(document.body.lastElementChild);
    });

    test('mounts opened', () => {
      // once in mount and twice in #showModal
      expect(modalMock).toHaveBeenCalledTimes(3);
      expect(wrapper).toMatchSnapshot();
    });

    test('open on prop change', () => {
      testModal.setProps({ open: true });
      expect(modalMock).toHaveBeenCalledTimes(3);
      // no trigger is defined, modal should be configured in constructor
      expect(modalMock.mock.calls[0]).toEqual([{ one: 1 }]);
      // showModal initializes the modal again
      expect(modalMock.mock.calls[1]).toEqual([{ one: 1 }]);
      expect(modalMock).toHaveBeenLastCalledWith('open');
    });

    test('closes on prop change', () => {
      testModal.setProps({ open: false });
      expect(modalMock).toHaveBeenCalledTimes(4);
      // no trigger is defined, modal should be configured in constructor
      expect(modalMock.mock.calls[0]).toEqual([{ one: 1 }]);
      // open prop is set, so showModal is called
      expect(modalMock.mock.calls[1]).toEqual([{ one: 1 }]);
      expect(modalMock.mock.calls[2]).toEqual(['open']);
      expect(modalMock).toHaveBeenLastCalledWith('close');
    });
  });

  describe('renders a trigger', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Modal trigger={trigger} modalOptions={modalOptions} header={header}>
          {children}
        </Modal>
      );
    });

    afterEach(() => {
      modalMock.mockClear();
      document.body.removeChild(document.body.lastElementChild);
    });

    test('renders', () => {
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    });

    test('initializes with modalOptions', () => {
      wrapper.find('button').simulate('click');
      expect(modalMock).toHaveBeenCalledWith(modalOptions);
    });
  });
});
