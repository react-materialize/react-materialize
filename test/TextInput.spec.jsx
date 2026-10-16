import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '../src/TextInput';
import idgen from '../src/idgen';
import Icon from '../src/Icon';

describe('<TextInput />', () => {
  let updateTextFieldsSpy;
  let characterCounterInitSpy;

  beforeEach(() => {
    updateTextFieldsSpy = vi.spyOn(M, 'updateTextFields');
    characterCounterInitSpy = vi
      .spyOn(M.CharacterCounter, 'init')
      .mockImplementation(() => ({ destroy: vi.fn() }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders a text input inside an input-field wrapper', () => {
    const { container } = render(<TextInput />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'TextInput-mockId');
    expect(input.parentElement).toBe(container.firstChild);
    expect(container.firstChild).toHaveClass('input-field');
  });

  test('accepts an external id', () => {
    render(<TextInput id="custom" label="Name" />);
    expect(screen.getByLabelText('Name')).toHaveAttribute('id', 'custom');
  });

  test('handles layout classes', () => {
    const { container } = render(<TextInput s={4} m={6} />);

    expect(container.firstChild).toHaveClass('input-field', 'col', 's4', 'm6');
  });

  test('handles removing layout classes', () => {
    const { container } = render(<TextInput s={4} m={6} noLayout />);

    expect(container.firstChild).toHaveClass('input-field');
    expect(container.firstChild).not.toHaveClass('col');
    expect(container.firstChild).not.toHaveClass('s4');
    expect(container.firstChild).not.toHaveClass('m6');
  });

  test('renders placeholder', () => {
    render(<TextInput placeholder="Name" />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });

  test('renders label associated with the input', () => {
    render(<TextInput label="Name" />);

    const input = screen.getByLabelText('Name');
    expect(input).toHaveAttribute('id', 'TextInput-mockId');
    expect(screen.getByText('Name')).toHaveAttribute('for', 'TextInput-mockId');
    expect(screen.getByText('Name')).not.toHaveClass('active');
  });

  test('marks label active when value or placeholder is present', () => {
    const { rerender } = render(
      <TextInput label="Name" value="Bob" onChange={() => {}} />
    );
    expect(screen.getByText('Name')).toHaveClass('active');

    rerender(<TextInput label="Name" placeholder="Type here" />);
    expect(screen.getByText('Name')).toHaveClass('active');
  });

  test('marks node labels with label-icon', () => {
    render(<TextInput label={<Icon>search</Icon>} />);
    expect(screen.getByText('search').closest('label')).toHaveClass(
      'label-icon'
    );
  });

  test('handles validate', () => {
    render(<TextInput validate />);
    expect(screen.getByRole('textbox')).toHaveClass('validate');
  });

  test('handles inputClassName', () => {
    render(<TextInput validate inputClassName="hello red" />);
    expect(screen.getByRole('textbox')).toHaveClass('hello', 'red', 'validate');
  });

  test('renders success and error messages as data attributes', () => {
    const { container } = render(
      <TextInput label="Email" success="Looks good" error="Invalid" />
    );

    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('data-success', 'Looks good');
    expect(label).toHaveAttribute('data-error', 'Invalid');

    const helper = container.querySelector('.helper-text');
    expect(helper).toHaveAttribute('data-success', 'Looks good');
    expect(helper).toHaveAttribute('data-error', 'Invalid');
  });

  test('omits helper text without success or error', () => {
    const { container } = render(<TextInput label="Email" />);
    expect(container.querySelector('.helper-text')).toBeNull();
  });

  test('handles password and email types', () => {
    const { container, rerender } = render(<TextInput password />);
    expect(container.querySelector('input')).toHaveAttribute(
      'type',
      'password'
    );

    rerender(<TextInput email />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  test('explicit type overrides password/email', () => {
    render(<TextInput type="number" password />);
    expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number');
  });

  test('handles disabled', () => {
    render(<TextInput disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('renders defaultValue', () => {
    render(<TextInput defaultValue="Hello" />);
    expect(screen.getByRole('textbox')).toHaveValue('Hello');
  });

  test('calls onChange when the user types', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TextInput onChange={onChange} />);

    await user.type(screen.getByRole('textbox'), '7');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('7');
  });

  test('passes other props to the input', () => {
    render(<TextInput name="first" data-foo="bar" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'first');
    expect(input).toHaveAttribute('data-foo', 'bar');
  });

  test('renders children after the input', () => {
    const { container } = render(
      <TextInput>
        <span className="extra">extra</span>
      </TextInput>
    );
    expect(container.firstChild.lastChild).toHaveTextContent('extra');
  });

  test('forwards ref to the input element', () => {
    const ref = React.createRef();
    render(<TextInput ref={ref} />);
    expect(ref.current).toBe(screen.getByRole('textbox'));
  });

  test('handles file type', () => {
    const { container } = render(
      <TextInput type="file" label="File" validate inputClassName="extra" />
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('input-field', 'col', 'file-field');

    const fileInput = container.querySelector('input[type="file"]');
    expect(fileInput).toHaveAttribute('id', 'TextInput-mockId');
    expect(fileInput).toHaveClass('validate', 'extra');
    expect(fileInput.parentElement).toHaveClass('btn');
    expect(fileInput.previousElementSibling).toHaveTextContent('File');

    const pathInput = container.querySelector('.file-path-wrapper input');
    expect(pathInput).toHaveAttribute('type', 'text');
    expect(pathInput).toHaveClass('file-path', 'validate');
  });

  describe('Materialize js', () => {
    test('calls M.updateTextFields on mount and when children change', () => {
      const { rerender } = render(<TextInput>a</TextInput>);
      expect(updateTextFieldsSpy).toHaveBeenCalledTimes(1);

      rerender(<TextInput>a</TextInput>);
      expect(updateTextFieldsSpy).toHaveBeenCalledTimes(1);

      rerender(<TextInput>b</TextInput>);
      expect(updateTextFieldsSpy).toHaveBeenCalledTimes(2);
    });

    test('initialises CharacterCounter when data-length is given', () => {
      render(<TextInput data-length={20} />);
      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('data-length', '20');
      expect(characterCounterInitSpy).toHaveBeenCalledWith(input);
    });

    test('does not initialise CharacterCounter without data-length', () => {
      render(<TextInput />);
      expect(characterCounterInitSpy).not.toHaveBeenCalled();
    });

    test('initialises CharacterCounter only once across re-renders', () => {
      const { rerender } = render(<TextInput data-length={20} />);
      rerender(<TextInput data-length={20} />);

      expect(characterCounterInitSpy).toHaveBeenCalledTimes(1);
    });

    test('initialises CharacterCounter on the input when given a callback ref', () => {
      const ref = vi.fn();
      render(<TextInput ref={ref} data-length={20} />);
      const input = screen.getByRole('textbox');

      expect(ref).toHaveBeenCalledWith(input);
      expect(characterCounterInitSpy).toHaveBeenCalledWith(input);
    });
  });

  describe('Icon', () => {
    test('renders as a string', () => {
      const { container } = render(<TextInput icon="cloud" />);
      const icon = screen.getByText('cloud');

      expect(icon.tagName).toBe('I');
      expect(icon).toHaveClass('material-icons', 'prefix');
      expect(icon).toBe(container.firstChild.firstChild);
    });

    test('renders as a node', async () => {
      const user = userEvent.setup();
      const mockIconClick = vi.fn();
      render(<TextInput icon={<Icon onClick={mockIconClick}>cloud</Icon>} />);

      const icon = screen.getByText('cloud');
      expect(icon).toHaveClass('material-icons', 'prefix');

      await user.click(icon);
      expect(mockIconClick).toHaveBeenCalledTimes(1);
    });

    test('keeps the icon element className', () => {
      render(<TextInput icon={<i className="material-icons red">cloud</i>} />);
      expect(screen.getByText('cloud')).toHaveClass(
        'material-icons',
        'red',
        'prefix'
      );
    });
  });

  test('keeps its generated id across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const { container, rerender } = render(<TextInput label="Name" />);
      const before = container.querySelector('input').id;
      rerender(<TextInput label="Name" />);
      expect(container.querySelector('input').id).toBe(before);
      expect(container.querySelector('label')).toHaveAttribute('for', before);
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });
});
