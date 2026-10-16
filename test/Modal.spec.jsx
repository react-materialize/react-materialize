import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../src/Modal';
import idgen from '../src/idgen';
import mocker from './helper/new-mocker';

const trigger = <button type="button">click</button>;
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
  const modalOpenMock = vi.fn();
  const modalCloseMock = vi.fn();
  const modalInitMock = vi.fn();
  const modalInstanceDestroyMock = vi.fn();
  const modalMock = {
    init: (el, options) => {
      modalInitMock(el, options);
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
    modalOpenMock.mockClear();
    modalCloseMock.mockClear();
    modalInstanceDestroyMock.mockClear();
  });

  const getModal = () => document.body.querySelector('.modal');

  describe('initialises', () => {
    test('calls M.Modal.init on the modal element with default options', () => {
      render(<Modal />);

      expect(modalInitMock).toHaveBeenCalledTimes(1);
      expect(modalInitMock).toHaveBeenCalledWith(getModal(), {
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

    test('calls M.Modal.init with custom options', () => {
      render(<Modal options={options} />);
      expect(modalInitMock).toHaveBeenCalledWith(getModal(), options);
    });

    test('destroys the instance and removes the portal root on unmount', () => {
      const { unmount } = render(<Modal />);
      const portalRoot = getModal().parentElement;
      expect(portalRoot.parentElement).toBe(document.body);

      unmount();
      expect(modalInstanceDestroyMock).toHaveBeenCalledTimes(1);
      expect(document.body.contains(portalRoot)).toBe(false);
      expect(getModal()).toBeNull();
    });

    test('does not re-initialise when re-rendered with the same props', () => {
      const { rerender } = render(<Modal>{children}</Modal>);
      rerender(<Modal>{children}</Modal>);

      expect(modalInitMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('renders a modal', () => {
    test('renders into document.body outside the render container', () => {
      const { container } = render(<Modal>{children}</Modal>);

      const modal = getModal();
      expect(modal).toBeInTheDocument();
      expect(container.contains(modal)).toBe(false);
      expect(modal).toHaveAttribute('id', 'Modal-mockId');
    });

    test('has header, children and default close action', () => {
      render(
        <Modal trigger={trigger} options={options} header={header}>
          {children}
        </Modal>
      );

      const modal = getModal();
      const content = modal.querySelector('.modal-content');
      expect(
        within(content).getByRole('heading', { level: 4, name: header })
      ).toBeInTheDocument();
      expect(
        within(content).getByRole('heading', { level: 1, name: 'Hello' })
      ).toBeInTheDocument();

      const footer = modal.querySelector('.modal-footer');
      const close = within(footer).getByRole('button', { name: 'Close' });
      expect(close).toHaveClass('modal-close', 'btn-flat', 'waves-green');
    });

    test('renders custom actions in the footer', () => {
      render(
        <Modal actions={[<button key="ok">OK</button>]}>{children}</Modal>
      );

      const footer = getModal().querySelector('.modal-footer');
      expect(within(footer).getByRole('button', { name: 'OK' })).toBeVisible();
      expect(
        within(footer).queryByRole('button', { name: 'Close' })
      ).toBeNull();
    });

    test('applies className, fixedFooter and bottomSheet classes', () => {
      render(<Modal className="custom" fixedFooter bottomSheet />);
      expect(getModal()).toHaveClass(
        'modal',
        'custom',
        'modal-fixed-footer',
        'bottom-sheet'
      );
    });

    test('passes extra props such as id to the modal element', () => {
      render(<Modal id="my-modal" />);
      expect(getModal()).toHaveAttribute('id', 'my-modal');
    });

    test('renders into a custom root', () => {
      const root = document.createElement('section');
      document.body.appendChild(root);

      const { unmount } = render(<Modal root={root}>{children}</Modal>);
      expect(root.querySelector('.modal')).toBeInTheDocument();

      unmount();
      expect(root.querySelector('.modal')).toBeNull();
      root.remove();
    });
  });

  describe('trigger', () => {
    test('renders the trigger and opens the modal on click', async () => {
      const user = userEvent.setup();
      render(<Modal trigger={trigger}>{children}</Modal>);

      const button = screen.getByRole('button', { name: 'click' });
      expect(modalOpenMock).not.toHaveBeenCalled();

      await user.click(button);
      expect(modalOpenMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('controlled modal with `open` prop', () => {
    test('calls `open` on mount', () => {
      render(<Modal open>{children}</Modal>);
      expect(modalOpenMock).toHaveBeenCalledTimes(1);
      expect(modalCloseMock).not.toHaveBeenCalled();
    });

    test('does not call `open` when mounted closed', () => {
      render(<Modal>{children}</Modal>);
      expect(modalOpenMock).not.toHaveBeenCalled();
    });

    test('calls `close` when `open` changes to false', () => {
      const { rerender } = render(<Modal open>{children}</Modal>);
      expect(modalOpenMock).toHaveBeenCalledTimes(1);

      rerender(<Modal open={false}>{children}</Modal>);
      expect(modalCloseMock).toHaveBeenCalledTimes(1);
      expect(modalOpenMock).toHaveBeenCalledTimes(1);
    });

    test('calls `open` when `open` changes to true', () => {
      const { rerender } = render(<Modal open={false}>{children}</Modal>);
      expect(modalOpenMock).not.toHaveBeenCalled();

      rerender(<Modal open>{children}</Modal>);
      expect(modalOpenMock).toHaveBeenCalledTimes(1);
    });

    test('does not re-initialise on rerender with same options', () => {
      const { rerender } = render(<Modal open>{children}</Modal>);
      rerender(<Modal open={false}>{children}</Modal>);
      expect(modalInitMock).toHaveBeenCalledTimes(1);
    });
  });

  test('keeps its generated id across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const { rerender } = render(<Modal>{children}</Modal>);
      const before = getModal().id;
      rerender(<Modal>{children}</Modal>);

      expect(getModal().id).toBe(before);
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });
});
