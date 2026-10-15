import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../src/Modal';
import mocker from './helper/new-mocker';

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

describe('<Modal />', () => {
  const modalOpenMock = jest.fn();
  const modalCloseMock = jest.fn();
  const modalInitMock = jest.fn();
  const modalInstanceDestroyMock = jest.fn();
  const modalMock = {
    init: (_, options) => {
      modalInitMock(options);
      return {
        open: modalOpenMock,
        close: modalCloseMock,
        destroy: modalInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Modal', modalMock);

  afterAll(() => {
    restore();
  });

  beforeEach(() => {
    modalInitMock.mockClear();
  });

  describe('initialises', () => {
    test('calls Modal', () => {
      render(<Modal />);

      expect(modalInitMock).toBeCalledWith({
        opacity: 0.5,
        inDuration: 250,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true,
        dismissible: true,
        startingTop: '4%',
        endingTop: '10%'
      });
    });
  });

  describe('renders a modal', () => {
    test('has children', () => {
      const { queryByText } = render(
        <Modal trigger={trigger} options={options} header={header}>
          {children}
        </Modal>
      );

      expect(queryByText('Hello')).toBeTruthy();
      expect(document.body.querySelector('.modal-footer')).toBeTruthy();
    });
  });

  describe('controlled modal with `open` prop', () => {
    test('calls `open` on mount', () => {
      render(<Modal open>{children}</Modal>);
      expect(modalOpenMock).toHaveBeenCalledTimes(1);
    });

    test('open on prop change', () => {
      const { rerender } = render(<Modal open>{children}</Modal>);
      rerender(<Modal open={false}>{children}</Modal>);
      expect(modalOpenMock).toHaveBeenCalledTimes(2);
    });
  });
});
