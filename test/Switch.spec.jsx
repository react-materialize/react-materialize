import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from '../src/Switch';

describe('<Switch />', () => {
  test('renders', () => {
    const { container } = render(<Switch offLabel="Off" onLabel="On" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'Switch-mockId');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeEnabled();
    expect(screen.getByLabelText(/Off/)).toBe(checkbox);

    // Materialize structure: .switch > label > [off text, input, span.lever, on text]
    const label = container.querySelector('.switch > label');
    expect(label).toHaveAttribute('for', 'Switch-mockId');
    expect(label).toHaveTextContent(/^OffOn$/);
    expect(Array.from(label.childNodes, node => node.textContent)).toEqual([
      'Off',
      '',
      '',
      'On'
    ]);
    expect(label.childNodes[1]).toBe(checkbox);
    expect(label.childNodes[2]).toHaveClass('lever');
  });

  test('with id', () => {
    const { container } = render(
      <Switch id="notifications" offLabel="Off" onLabel="On" />
    );

    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'notifications');
    expect(container.querySelector('label')).toHaveAttribute(
      'for',
      'notifications'
    );
  });

  test('passes checked, disabled and className to the input', () => {
    render(
      <Switch offLabel="Off" onLabel="On" checked disabled className="red" />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('red');
  });

  test('calls onChange when toggled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch offLabel="Off" onLabel="On" onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target).toBe(checkbox);
    expect(onChange.mock.calls[0][0].target.checked).toBe(true);
  });

  test('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch offLabel="Off" onLabel="On" disabled onChange={onChange} />);

    await user.click(screen.getByRole('checkbox'));

    expect(onChange).not.toHaveBeenCalled();
  });
});
