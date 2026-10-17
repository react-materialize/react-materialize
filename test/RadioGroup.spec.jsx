import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioGroup from '../src/RadioGroup';

describe('<RadioGroup />', () => {
  const onChange = vi.fn();

  const defaultProps = {
    name: 'size',
    onChange,
    options: [
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' }
    ]
  };

  beforeEach(() => {
    onChange.mockReset();
  });

  test('renders a labelled radio per option', () => {
    const { container } = render(<RadioGroup {...defaultProps} />);

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(3);
    expect(radios.map(radio => radio.value)).toEqual(['xl', 'l', 'm']);

    defaultProps.options.forEach(({ label, value }, idx) => {
      const radio = screen.getByRole('radio', { name: label });
      expect(radio).toHaveAttribute('value', value);
      expect(radio).toHaveAttribute('name', 'size');
      expect(radio).toHaveAttribute('id', `radio${idx}`);
      expect(radio).not.toBeChecked();
      expect(radio).toBeEnabled();
      expect(radio).not.toHaveClass('with-gap');
      // Materialize styles the <span> sibling of the input inside the <label>
      expect(radio.parentElement.tagName).toBe('LABEL');
      expect(radio.nextElementSibling.tagName).toBe('SPAN');
    });
    expect(container.querySelectorAll('label')).toHaveLength(3);
  });

  test('with predefined value', () => {
    render(<RadioGroup {...defaultProps} value="l" />);

    expect(screen.getByRole('radio', { name: 'L' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'XL' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'M' })).not.toBeChecked();
  });

  test('follows value updates', () => {
    const { rerender } = render(<RadioGroup {...defaultProps} value="l" />);

    rerender(<RadioGroup {...defaultProps} value="m" />);

    expect(screen.getByRole('radio', { name: 'M' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'L' })).not.toBeChecked();
  });

  test('with gap', () => {
    render(<RadioGroup {...defaultProps} withGap />);

    for (const radio of screen.getAllByRole('radio')) {
      expect(radio).toHaveClass('with-gap');
    }
  });

  test('disabled', async () => {
    const user = userEvent.setup();
    render(<RadioGroup {...defaultProps} disabled />);

    for (const radio of screen.getAllByRole('radio')) {
      expect(radio).toBeDisabled();
    }

    await user.click(screen.getByRole('radio', { name: 'XL' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  test('with classnames', () => {
    const { container } = render(
      <RadioGroup {...defaultProps} radioClassNames="red" />
    );

    const labels = container.querySelectorAll('label');
    expect(labels).toHaveLength(3);
    for (const label of labels) {
      expect(label).toHaveClass('red');
    }
    for (const radio of screen.getAllByRole('radio')) {
      expect(radio).not.toHaveClass('red');
    }
  });

  test('onChange callback', async () => {
    const user = userEvent.setup();
    render(<RadioGroup {...defaultProps} />);

    const radio = screen.getByRole('radio', { name: 'XL' });
    await user.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target).toBe(radio);
    expect(onChange.mock.calls[0][0].target.value).toBe('xl');

    await user.click(screen.getByText('M'));

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[1][0].target.value).toBe('m');
  });
});
