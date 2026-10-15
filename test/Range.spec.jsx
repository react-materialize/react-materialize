import React from 'react';
import { render, screen } from '@testing-library/react';
import Range from '../src/Range';
import mocker from './helper/new-mocker';

describe('<Range />', () => {
  const rangeInit = vi.fn();
  const rangeDestroy = vi.fn();
  let restore;

  beforeAll(() => {
    restore = mocker('Range', { init: rangeInit });
  });

  beforeEach(() => {
    rangeInit.mockReset();
    rangeDestroy.mockReset();
    rangeInit.mockReturnValue({ destroy: rangeDestroy });
  });

  afterAll(() => {
    restore();
  });

  test('renders a range input inside .range-field', () => {
    render(<Range min="10" max="99" step="3" />);

    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('type', 'range');
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '99');
    expect(slider).toHaveAttribute('step', '3');
    expect(slider.parentElement.tagName).toBe('P');
    expect(slider.parentElement).toHaveClass('range-field');
  });

  test('initializes M.Range on the input', () => {
    render(<Range min="10" max="99" />);

    expect(rangeInit).toHaveBeenCalledTimes(1);
    expect(rangeInit).toHaveBeenCalledWith(screen.getByRole('slider'));
  });

  test('re-initializes when min or max change', () => {
    const { rerender } = render(<Range min="10" max="99" />);

    rerender(<Range min="20" max="99" />);
    expect(rangeDestroy).toHaveBeenCalledTimes(1);
    expect(rangeInit).toHaveBeenCalledTimes(2);

    rerender(<Range min="20" max="50" />);
    expect(rangeDestroy).toHaveBeenCalledTimes(2);
    expect(rangeInit).toHaveBeenCalledTimes(3);
    expect(screen.getByRole('slider')).toHaveAttribute('max', '50');
  });

  test('destroys when unmounted', () => {
    const { unmount } = render(<Range min="10" max="99" />);

    expect(rangeDestroy).not.toHaveBeenCalled();
    unmount();
    expect(rangeDestroy).toHaveBeenCalledTimes(1);
  });
});
