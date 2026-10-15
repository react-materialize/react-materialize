import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toast from '../src/Toast';
import mocker from './helper/new-mocker';

describe('Toast', () => {
  const toastMock = vi.fn();
  const restore = mocker('toast', toastMock);
  const options = { html: 'here you go!', displayLength: 1000 };
  const child = <span>click me</span>;

  beforeEach(() => {
    toastMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('renders a toast button', () => {
    render(<Toast className="extra">{child}</Toast>);

    const button = screen.getByRole('button', { name: 'click me' });
    expect(button).toHaveClass('btn', 'toast', 'extra');
  });

  test('should create a child element', () => {
    render(<Toast options={options}>{child}</Toast>);

    const span = screen.getByText('click me');
    expect(span.tagName).toBe('SPAN');
    expect(span.parentElement).toBe(screen.getByRole('button'));
  });

  test('does not call M.toast before click', () => {
    render(<Toast options={options}>{child}</Toast>);
    expect(toastMock).not.toHaveBeenCalled();
  });

  test('calls M.toast with options when clicked', async () => {
    const user = userEvent.setup();
    render(<Toast options={options}>{child}</Toast>);

    await user.click(screen.getByRole('button'));
    expect(toastMock).toHaveBeenCalledTimes(1);
    expect(toastMock).toHaveBeenCalledWith(options);
  });

  test('calls M.toast with empty options by default', async () => {
    const user = userEvent.setup();
    render(<Toast>{child}</Toast>);

    await user.click(screen.getByRole('button'));
    expect(toastMock).toHaveBeenCalledWith({});
  });

  describe('undefined M', () => {
    let __M;
    beforeEach(() => {
      __M = globalThis.M;
      globalThis.M = undefined;
    });
    afterEach(() => {
      globalThis.M = __M;
    });
    test('doesnt throw without M', () => {
      render(<Toast options={options}>{child}</Toast>);

      expect(() => fireEvent.click(screen.getByRole('button'))).not.toThrow();
      expect(toastMock).not.toHaveBeenCalled();
    });
  });
});
