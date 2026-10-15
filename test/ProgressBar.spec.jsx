import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '../src/ProgressBar';

describe('<ProgressBar />', () => {
  test('renders', () => {
    const { container } = render(<ProgressBar />);
    expect(container).toMatchSnapshot();
  });

  test('adds progress style', () => {
    const { container } = render(<ProgressBar progress={32} />);
    expect(container).toMatchSnapshot();
  });

  test('handles determinate', () => {
    const { container } = render(<ProgressBar progress={32} />);
    expect(container.querySelector('.determinate')).toBeTruthy();
  });

  test('handles indeterminate', () => {
    const { container } = render(<ProgressBar />);
    expect(container.querySelector('.indeterminate')).toBeTruthy();
  });
});
