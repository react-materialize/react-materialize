import React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from '../src/Chip';
import Icon from '../src/Icon';
import mocker from './helper/new-mocker';

describe('<Chip />', () => {
  const chipInitMock = vi.fn();
  const chipInstanceDestroyMock = vi.fn();
  const restore = mocker('Chips', {
    init: (el, options) => {
      chipInitMock(el, options);
      return { destroy: chipInstanceDestroyMock };
    }
  });

  beforeEach(() => {
    chipInitMock.mockClear();
    chipInstanceDestroyMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('should render a chip without a close icon by default', () => {
    const { container } = render(<Chip>Tag</Chip>);
    const chip = container.firstChild;

    expect(chip.tagName).toBe('DIV');
    expect(chip).toHaveClass('chip');
    expect(chip).not.toHaveClass('chips');
    expect(chip).toHaveTextContent('Tag');
    expect(chip.querySelector('i')).toBeNull();
    expect(chipInitMock).not.toHaveBeenCalled();
  });

  test('accepts a close prop', () => {
    const { container } = render(<Chip close>Tag</Chip>);
    const icon = screen.getByText('close');

    expect(icon.tagName).toBe('I');
    expect(icon).toHaveClass('material-icons', 'close');
    expect(icon).toBe(container.firstChild.lastChild);
  });

  test('accepts a custom closeIcon', () => {
    render(
      <Chip close closeIcon={<Icon className="close">cancel</Icon>}>
        Tag
      </Chip>
    );
    expect(screen.getByText('cancel')).toHaveClass('material-icons', 'close');
    expect(screen.queryByText('close')).toBeNull();
  });

  test('accepts children', () => {
    const { container } = render(
      <Chip close>
        <p className="child">Child</p>
      </Chip>
    );

    const child = screen.getByText('Child');
    expect(child.parentElement).toBe(container.firstChild);
    expect(child.nextElementSibling).toHaveClass('close');
  });

  test('accepts className', () => {
    const { container } = render(<Chip className="find" />);
    expect(container.firstChild).toHaveClass('chip', 'find');
  });

  test('passes other props to the element', () => {
    const { container } = render(<Chip data-testid="tag" title="hello" />);
    expect(screen.getByTestId('tag')).toBe(container.firstChild);
    expect(container.firstChild).toHaveAttribute('title', 'hello');
  });

  describe('initialises', () => {
    const options = {
      data: [{ tag: 'Apple' }, { tag: 'Microsoft' }, { tag: 'Google' }],
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
      autocompleteOptions: {
        data: {
          Apple: null,
          Microsoft: null,
          Google: null
        },
        limit: Infinity
      }
    };

    test('calls Chips', () => {
      const { container } = render(<Chip options={options} />);

      expect(chipInitMock).toHaveBeenCalledTimes(1);
      expect(chipInitMock).toHaveBeenCalledWith(container.firstChild, options);
    });

    test('renders a chips container without static content', () => {
      const { container } = render(
        <Chip options={options} className="find" close>
          Child
        </Chip>
      );

      expect(container.firstChild).toHaveClass('chips', 'find');
      expect(container.firstChild).not.toHaveClass('chip');
      expect(container.firstChild).toBeEmptyDOMElement();
    });

    test('destroys the instance on unmount', () => {
      const { unmount } = render(<Chip options={options} />);
      expect(chipInstanceDestroyMock).not.toHaveBeenCalled();

      unmount();
      expect(chipInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });

    test('re-initialises when options change', () => {
      const { container, rerender } = render(<Chip options={options} />);

      const nextOptions = { ...options, placeholder: 'Another' };
      rerender(<Chip options={nextOptions} />);

      expect(chipInstanceDestroyMock).toHaveBeenCalledTimes(1);
      expect(chipInitMock).toHaveBeenCalledTimes(2);
      expect(chipInitMock).toHaveBeenLastCalledWith(
        container.firstChild,
        nextOptions
      );
    });
  });
});
