import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../src/Modal';
import mocker from './helper/new-mocker';

describe('<Modal />', () => {
  let wrapper;
  const modalInitMock = jest.fn();
  const modalInstanceDestroyMock = jest.fn();
  const modalMock = {
    init: (el, options) => {
      modalInitMock(options);
      return {
        destroy: modalInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Modal', modalMock);

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
  const options = {
    dismissible: true,
    opacity: 0.4
  };

  let renderedWrapper;

  describe('initialises', () => {
    beforeEach(() => {
      modalInitMock.mockClear();
      modalInstanceDestroyMock.mockClear();
    });

    test('calls Modal', () => {
      mount(<Modal />);

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
      wrapper = mount(<Modal options={options}>{children}</Modal>);
    });

    afterEach(() => {
      modalInitMock.mockClear();
      document.body.removeChild(document.body.lastElementChild);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(Modal).length).toEqual(1);
    });
  });

  // describe('controlled modal with `open` prop', () => {
  //   let testModal;

  //   beforeEach(() => {
  //     testModal = shallow(
  //       <Modal options={{ one: 1 }} open>
  //         {children}
  //       </Modal>
  //     );
  //   });

  //   afterEach(() => {
  //     modalInitMock.mockClear();
  //     document.body.removeChild(document.body.lastElementChild);
  //   });

  //   test('mounts opened', () => {
  //     expect(modalInitMock).toHaveBeenCalledTimes(1);
  //     expect(wrapper).toMatchSnapshot();
  //   });

  //   test('open on prop change', () => {
  //     testModal.setProps({ open: true });
  //     expect(modalInitMock).toHaveBeenCalledTimes(3);
  //     // no trigger is defined, modal should be configured in constructor
  //     expect(modalInitMock.mock.calls[0]).toEqual([{ one: 1 }]);
  //     // showModal initializes the modal again
  //     expect(modalInitMock.mock.calls[1]).toEqual([{ one: 1 }]);
  //     expect(modalInitMock).toHaveBeenLastCalledWith('open');
  //   });

  //   test('closes on prop change', () => {
  //     testModal.setProps({ open: false });
  //     expect(modalInitMock).toHaveBeenCalledTimes(4);
  //     // no trigger is defined, modal should be configured in constructor
  //     expect(modalInitMock.mock.calls[0]).toEqual([{ one: 1 }]);
  //     // open prop is set, so showModal is called
  //     expect(modalInitMock.mock.calls[1]).toEqual([{ one: 1 }]);
  //     expect(modalInitMock.mock.calls[2]).toEqual(['open']);
  //     expect(modalInitMock).toHaveBeenLastCalledWith('close');
  //   });
  // });

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
      document.body.removeChild(document.body.lastElementChild);
    });

    test('renders', () => {
      expect(wrapper.find('button').length).toEqual(2);
      expect(wrapper).toMatchSnapshot();
    });

    test('initializes with options', () => {
      wrapper.last('button').simulate('click');
      expect(modalInitMock).toHaveBeenCalledWith(options);
    });
  });
});
