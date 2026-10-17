import { render } from '@testing-library/react';
import ProgressBar from '../src/ProgressBar';

describe('<ProgressBar />', () => {
  test('renders a progress container', () => {
    const { container } = render(<ProgressBar />);
    const progress = container.firstChild;
    expect(progress).toHaveClass('progress', 'lighten-5');
    expect(progress.children).toHaveLength(1);
  });

  test('handles indeterminate', () => {
    const { container } = render(<ProgressBar />);
    const bar = container.querySelector('.progress > div');
    expect(bar).toHaveClass('indeterminate');
    expect(bar).not.toHaveClass('determinate');
    expect(bar).not.toHaveAttribute('style');
  });

  test('handles determinate', () => {
    const { container } = render(<ProgressBar progress={32} />);
    const bar = container.querySelector('.progress > div');
    expect(bar).toHaveClass('determinate');
    expect(bar).not.toHaveClass('indeterminate');
  });

  test('adds progress style', () => {
    const { container } = render(<ProgressBar progress={32} />);
    expect(container.querySelector('.determinate')).toHaveStyle({
      width: '32%'
    });
  });

  test('renders a determinate bar at 0% when progress is 0', () => {
    const { container } = render(<ProgressBar progress={0} />);
    const bar = container.querySelector('.progress > div');
    expect(bar).toHaveClass('determinate');
    expect(bar).not.toHaveClass('indeterminate');
    expect(bar).toHaveStyle({ width: '0%' });
  });

  test('stays indeterminate when progress is null', () => {
    const { container } = render(<ProgressBar progress={null} />);
    const bar = container.querySelector('.progress > div');
    expect(bar).toHaveClass('indeterminate');
    expect(bar).not.toHaveAttribute('style');
  });

  test('updates width when progress changes', () => {
    const { container, rerender } = render(<ProgressBar progress={32} />);
    rerender(<ProgressBar progress={75} />);
    expect(container.querySelector('.determinate')).toHaveStyle({
      width: '75%'
    });
  });

  test('applies className to the progress container', () => {
    const { container } = render(<ProgressBar className="red" />);
    expect(container.firstChild).toHaveClass('progress', 'red');
  });
});
