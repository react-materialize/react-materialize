import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '../src/Checkbox';
import idgen from '../src/idgen';

describe('<Checkbox />', () => {
  test('renders a checkbox labelled by its label', () => {
    const { container } = render(<Checkbox value="red" label="red" />);

    const checkbox = screen.getByRole('checkbox', { name: 'red' });
    expect(checkbox).toHaveAttribute('value', 'red');
    expect(checkbox).toHaveAttribute('id', 'Checkbox_mockId');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeEnabled();
    expect(checkbox).not.toHaveClass('filled-in');

    // Materialize styles the <span> sibling of the input inside the <label>
    const label = container.querySelector('label');
    expect(label).toHaveAttribute('for', 'Checkbox_mockId');
    expect(label.firstElementChild).toBe(checkbox);
    expect(checkbox.nextElementSibling.tagName).toBe('SPAN');
    expect(checkbox.nextElementSibling).toHaveTextContent('red');
  });

  test('renders disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox value="red" label="red" disabled onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox', { name: 'red' });
    expect(checkbox).toBeDisabled();

    await user.click(checkbox);
    expect(onChange).not.toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();
  });

  test('filled-in', () => {
    render(<Checkbox value="red" label="red" filledIn />);
    expect(screen.getByRole('checkbox', { name: 'red' })).toHaveClass(
      'filled-in'
    );
  });

  test('with id', () => {
    const { container } = render(
      <Checkbox value="red" label="red" id="test" />
    );

    expect(screen.getByRole('checkbox', { name: 'red' })).toHaveAttribute(
      'id',
      'test'
    );
    expect(container.querySelector('label')).toHaveAttribute('for', 'test');
  });

  test('with indeterminate', () => {
    render(<Checkbox value="red" label="red" indeterminate />);

    const checkbox = screen.getByRole('checkbox', { name: 'red' });
    expect(checkbox.checked).toBe(false);
    expect(checkbox.indeterminate).toBe(true);
  });

  test('checked', () => {
    render(<Checkbox value="red" label="red" checked />);

    const checkbox = screen.getByRole('checkbox', { name: 'red' });
    expect(checkbox.checked).toBe(true);
    expect(checkbox.indeterminate).toBe(false);
  });

  test('follows checked prop updates', () => {
    const { rerender } = render(
      <Checkbox value="red" label="red" checked={false} />
    );
    const checkbox = screen.getByRole('checkbox', { name: 'red' });
    expect(checkbox).not.toBeChecked();

    rerender(<Checkbox value="red" label="red" checked />);
    expect(checkbox).toBeChecked();
  });

  test('unchecks when the checked prop is removed', () => {
    const { rerender } = render(<Checkbox value="red" label="red" checked />);
    const checkbox = screen.getByRole('checkbox', { name: 'red' });

    rerender(<Checkbox value="red" label="red" />);
    expect(checkbox).not.toBeChecked();
  });

  test('clears a ticked box when indeterminate turns on', async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Checkbox value="red" label="red" indeterminate={false} />
    );
    const checkbox = screen.getByRole('checkbox', { name: 'red' });
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    rerender(<Checkbox value="red" label="red" indeterminate />);
    expect(checkbox).not.toBeChecked();
    expect(checkbox.indeterminate).toBe(true);
  });

  test('toggles and calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox value="red" label="red" onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox', { name: 'red' });
    await user.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target).toBe(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(screen.getByText('red'));

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).not.toBeChecked();
  });

  test('does not overwrite materialize-css classnames', () => {
    render(<Checkbox value="red" label="red" filledIn className="my-class" />);
    expect(screen.getByRole('checkbox', { name: 'red' })).toHaveClass(
      'filled-in',
      'my-class'
    );
  });

  test('keeps its generated id across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const { container, rerender } = render(
        <Checkbox value="red" label="red" />
      );
      const before = container.querySelector('input').id;
      rerender(<Checkbox value="red" label="red" />);
      expect(container.querySelector('input').id).toBe(before);
      expect(container.querySelector('label')).toHaveAttribute('for', before);
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });
});
