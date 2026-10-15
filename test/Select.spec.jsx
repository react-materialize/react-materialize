import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../src/Select';
import Icon from '../src/Icon';
import mocker from './helper/new-mocker';

const defaultOptions = {
  classes: '',
  dropdownOptions: {
    alignment: 'left',
    autoTrigger: true,
    constrainWidth: true,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};

const fruitOptions = [
  <option key="placeholder" value="" disabled>
    Choose your option
  </option>,
  <option key="1" value="1">
    Option 1
  </option>,
  <option key="2" value="2">
    Option 2
  </option>
];

describe('<Select />', () => {
  const getWrapper = container => container.querySelector('.input-field');

  test('handles layout classes', () => {
    const { container } = render(<Select s={4} m={6} />);

    const wrapper = getWrapper(container);
    expect(wrapper).toHaveClass('input-field', 'col', 's4', 'm6');
    expect(wrapper).not.toHaveClass('l', 'xl');
  });

  test('handles removing layout classes', () => {
    const { container } = render(<Select s={4} m={6} noLayout />);

    const wrapper = getWrapper(container);
    expect(wrapper).toHaveClass('input-field');
    expect(wrapper).not.toHaveClass('col');
    expect(wrapper).not.toHaveClass('s4');
    expect(wrapper).not.toHaveClass('m6');
  });

  test('renders label associated with the select', () => {
    render(<Select id="name" label="Name" success="ok" error="bad" />);

    const select = screen.getByLabelText('Name');
    expect(select.tagName).toBe('SELECT');
    expect(select).toHaveAttribute('id', 'name');

    const label = screen.getByText('Name');
    expect(label).toHaveAttribute('data-success', 'ok');
    expect(label).toHaveAttribute('data-error', 'bad');
  });

  test('generates an id when none is given', () => {
    render(<Select label="Name" />);
    expect(screen.getByLabelText('Name')).toHaveAttribute(
      'id',
      'Select-mockId'
    );
  });

  test('renders no label when none is given', () => {
    const { container } = render(<Select />);
    expect(container.querySelector('label')).not.toBeInTheDocument();
  });

  test('handles validate', () => {
    render(<Select validate label="Fruit" />);
    expect(screen.getByLabelText('Fruit')).toHaveClass('validate');
  });

  test('handles className', () => {
    render(<Select validate className="hello red" label="Fruit" />);
    expect(screen.getByLabelText('Fruit')).toHaveClass(
      'hello',
      'red',
      'validate'
    );
  });

  test('with icon', () => {
    const { container } = render(
      <Select icon={<Icon>cloud</Icon>} label="Fruit" />
    );

    const icon = screen.getByText('cloud');
    expect(icon).toHaveClass('material-icons', 'prefix');
    expect(getWrapper(container).firstElementChild).toBe(icon);
  });

  test('renders options', () => {
    render(
      <Select label="Fruit">
        <option value="1">1</option>
        <option value="2">2</option>
      </Select>
    );

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
    expect(options.map(option => option.value)).toEqual(['1', '2']);
    for (const option of options) {
      expect(screen.getByLabelText('Fruit')).toContainElement(option);
    }
  });

  test('renders multiple', () => {
    render(<Select multiple label="Fruit" />);

    const select = screen.getByLabelText('Fruit');
    expect(select).toHaveClass('multiple');
    expect(select.multiple).toBe(true);
  });

  test('handles other attributes', () => {
    render(<Select name="foo" disabled label="Fruit" />);

    const select = screen.getByLabelText('Fruit');
    expect(select).toHaveAttribute('name', 'foo');
    expect(select).toBeDisabled();
  });

  test('selects the option given by value and follows value updates', () => {
    const { rerender } = render(
      <Select label="Fruit" value="1">
        {fruitOptions}
      </Select>
    );

    expect(screen.getByLabelText('Fruit')).toHaveValue('1');

    rerender(
      <Select label="Fruit" value="2">
        {fruitOptions}
      </Select>
    );

    expect(screen.getByLabelText('Fruit')).toHaveValue('2');
  });

  test('calls onChange when the native select changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select label="Fruit" value="" onChange={onChange}>
        {fruitOptions}
      </Select>
    );

    const select = screen.getByLabelText('Fruit');
    await user.selectOptions(select, '2');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target).toBe(select);
    expect(select).toHaveValue('2');
    expect(screen.getByRole('option', { name: 'Option 2' }).selected).toBe(
      true
    );
  });

  test('calls onChange when a Materialize option is picked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(
      <Select label="Fruit" value="" onChange={onChange}>
        {fruitOptions}
      </Select>
    );

    const materializeOption = Array.from(
      container.querySelectorAll('ul.select-dropdown li')
    ).find(li => li.textContent === 'Option 1');
    await user.click(materializeOption);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Fruit')).toHaveValue('1');
  });

  test('calls onChange when a Materialize multiple option is picked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(
      <Select multiple label="Fruit" value={[]} onChange={onChange}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );

    const materializeOption = Array.from(
      container.querySelectorAll('ul.multiple-select-dropdown li')
    ).find(li => li.textContent === 'Option 2');
    await user.click(materializeOption);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Fruit')).toHaveValue(['2']);
  });

  describe('initialises', () => {
    const selectInit = vi.fn();
    const selectDestroy = vi.fn();
    let restore;

    beforeAll(() => {
      restore = mocker('FormSelect', { init: selectInit });
    });

    beforeEach(() => {
      selectInit.mockReset();
      selectDestroy.mockReset();
      selectInit.mockReturnValue({ destroy: selectDestroy });
    });

    afterAll(() => {
      restore();
    });

    test('calls FormSelect on the select element with default options', () => {
      render(<Select label="Fruit" />);

      expect(selectInit).toHaveBeenCalledTimes(1);
      expect(selectInit).toHaveBeenCalledWith(
        screen.getByLabelText('Fruit'),
        defaultOptions
      );
    });

    test('does not initialise Materialize for a browserDefault select', () => {
      const { unmount } = render(<Select browserDefault label="Fruit" />);

      expect(screen.getByLabelText('Fruit')).toHaveClass('browser-default');
      expect(selectInit).not.toHaveBeenCalled();
      unmount();
      expect(selectDestroy).not.toHaveBeenCalled();
    });

    test('initialises when browserDefault is turned off', () => {
      const { rerender } = render(<Select browserDefault label="Fruit" />);
      rerender(<Select label="Fruit" />);

      expect(selectInit).toHaveBeenCalledTimes(1);
      expect(selectInit).toHaveBeenCalledWith(
        screen.getByLabelText('Fruit'),
        defaultOptions
      );
    });

    test('destroys when browserDefault is turned on', () => {
      const { rerender } = render(<Select label="Fruit" />);
      rerender(<Select browserDefault label="Fruit" />);

      expect(selectDestroy).toHaveBeenCalledTimes(1);
      expect(selectInit).toHaveBeenCalledTimes(1);
    });

    test('handles options prop', () => {
      const options = { classes: 'wide', dropdownOptions: { hover: true } };
      render(<Select label="Fruit" options={options} />);

      expect(selectInit).toHaveBeenCalledWith(
        screen.getByLabelText('Fruit'),
        options
      );
    });

    test('re-initialises when the options children change', () => {
      const { rerender } = render(
        <Select label="Fruit">
          <option value="1">Option 1</option>
        </Select>
      );

      rerender(
        <Select label="Fruit">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      );

      expect(selectDestroy).toHaveBeenCalledTimes(1);
      expect(selectInit).toHaveBeenCalledTimes(2);
    });

    test('destroys when unmounted', () => {
      const { unmount } = render(<Select />);

      expect(selectDestroy).not.toHaveBeenCalled();
      unmount();
      expect(selectDestroy).toHaveBeenCalledTimes(1);
    });
  });

  test('unmounts a browserDefault select without errors', () => {
    const errors = [];
    const onError = event => {
      errors.push(event.message);
      event.preventDefault();
    };
    window.addEventListener('error', onError);
    try {
      const { unmount } = render(
        <Select browserDefault label="Fruit">
          <option value="1">One</option>
        </Select>
      );
      unmount();
    } finally {
      window.removeEventListener('error', onError);
    }

    expect(errors).toEqual([]);
  });

  test('handles changes on a browserDefault multiple select', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select
        browserDefault
        multiple
        label="Fruit"
        value={[]}
        onChange={onChange}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>
    );

    const select = screen.getByLabelText('Fruit');
    await user.selectOptions(select, ['1', '2']);

    expect(onChange).toHaveBeenCalled();
    expect([...select.selectedOptions].map(o => o.value)).toEqual(['1', '2']);
  });
});
