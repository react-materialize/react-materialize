import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textarea from '../src/Textarea';
import Icon from '../src/Icon';

describe('<Textarea />', () => {
  let autoResizeSpy;
  let characterCounterInitSpy;

  beforeEach(() => {
    autoResizeSpy = vi
      .spyOn(M, 'textareaAutoResize')
      .mockImplementation(() => {});
    characterCounterInitSpy = vi
      .spyOn(M.CharacterCounter, 'init')
      .mockImplementation(() => ({ destroy: vi.fn() }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders a materialize textarea inside an input-field wrapper', () => {
    const { container } = render(<Textarea />);
    const textarea = screen.getByRole('textbox');

    expect(textarea.tagName).toBe('TEXTAREA');
    expect(textarea).toHaveClass('materialize-textarea');
    expect(textarea).toHaveAttribute('id', 'Textarea-mockId');
    expect(textarea.parentElement).toBe(container.firstChild);
    expect(container.firstChild).toHaveClass('input-field', 'col');
  });

  test('Handles layout classes', () => {
    const { container } = render(<Textarea s={4} m={6} />);

    expect(container.firstChild).toHaveClass('input-field', 'col', 's4', 'm6');
  });

  test('Handles removing layout classes', () => {
    const { container } = render(<Textarea s={4} m={6} noLayout />);

    expect(container.firstChild).toHaveClass('input-field');
    expect(container.firstChild).not.toHaveClass('col');
    expect(container.firstChild).not.toHaveClass('s4');
    expect(container.firstChild).not.toHaveClass('m6');
  });

  test('Value', () => {
    render(<Textarea value="I was here" onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue('I was here');
  });

  test('defaultValue renders as value', () => {
    render(<Textarea defaultValue="I was here" />);
    expect(screen.getByRole('textbox')).toHaveValue('I was here');
  });

  test('Disabled', () => {
    render(<Textarea value="I was here" disabled readOnly />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('Placeholder', () => {
    render(<Textarea placeholder="I was here" />);
    expect(screen.getByPlaceholderText('I was here')).toHaveClass(
      'materialize-textarea'
    );
  });

  test('Label', () => {
    render(<Textarea label="Write something here..." />);

    const textarea = screen.getByLabelText('Write something here...');
    expect(textarea).toHaveAttribute('id', 'Textarea-mockId');
    const label = screen.getByText('Write something here...');
    expect(label).toHaveAttribute('for', 'Textarea-mockId');
    expect(label).not.toHaveClass('active');
  });

  test('Label uses an external id', () => {
    render(<Textarea id="notes" label="Notes" />);
    expect(screen.getByLabelText('Notes')).toHaveAttribute('id', 'notes');
  });

  test('Label is active when value or placeholder is present', () => {
    const { rerender } = render(
      <Textarea label="Notes" value="x" onChange={() => {}} />
    );
    expect(screen.getByText('Notes')).toHaveClass('active');

    rerender(<Textarea label="Notes" placeholder="Type" />);
    expect(screen.getByText('Notes')).toHaveClass('active');
  });

  test('success and error messages are set as data attributes', () => {
    const { container } = render(
      <Textarea label="Notes" success="Good" error="Bad" />
    );

    const label = screen.getByText('Notes');
    expect(label).toHaveAttribute('data-success', 'Good');
    expect(label).toHaveAttribute('data-error', 'Bad');

    const helper = container.querySelector('.helper-text');
    expect(helper).toHaveAttribute('data-success', 'Good');
    expect(helper).toHaveAttribute('data-error', 'Bad');
  });

  test('handles validate', () => {
    render(<Textarea validate />);
    expect(screen.getByRole('textbox')).toHaveClass(
      'materialize-textarea',
      'validate'
    );
  });

  test('Icon', () => {
    const { container } = render(<Textarea icon={<Icon>mode_edit</Icon>} />);
    const icon = screen.getByText('mode_edit');

    expect(icon).toHaveClass('material-icons', 'prefix');
    expect(icon).toBe(container.firstChild.firstChild);
  });

  test('with custom className', () => {
    render(<Textarea className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass(
      'materialize-textarea',
      'custom-class'
    );
  });

  test('renders children inside the wrapper', () => {
    const { container } = render(
      <Textarea>
        <span>extra</span>
      </Textarea>
    );
    expect(container.firstChild.lastChild).toHaveTextContent('extra');
  });

  test('onChange is fired', async () => {
    const user = userEvent.setup();
    const onChangeMock = vi.fn();
    render(<Textarea onChange={onChangeMock} />);

    await user.type(screen.getByRole('textbox'), 'a');

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock.mock.calls[0][0].target.value).toBe('a');
  });

  describe('Materialize js', () => {
    test('calls M.textareaAutoResize on mount and when children change', () => {
      const { rerender } = render(<Textarea>a</Textarea>);
      const textarea = screen.getByRole('textbox');
      expect(autoResizeSpy).toHaveBeenCalledTimes(1);
      expect(autoResizeSpy).toHaveBeenCalledWith(textarea);

      rerender(<Textarea>a</Textarea>);
      expect(autoResizeSpy).toHaveBeenCalledTimes(1);

      rerender(<Textarea>b</Textarea>);
      expect(autoResizeSpy).toHaveBeenCalledTimes(2);
    });

    test('initialises CharacterCounter when data-length is given', () => {
      render(<Textarea data-length={120} />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveAttribute('data-length', '120');
      expect(characterCounterInitSpy).toHaveBeenCalledTimes(1);
      expect(characterCounterInitSpy).toHaveBeenCalledWith(textarea);
    });

    test('does not initialise CharacterCounter without data-length', () => {
      render(<Textarea />);
      expect(characterCounterInitSpy).not.toHaveBeenCalled();
    });
  });
});
