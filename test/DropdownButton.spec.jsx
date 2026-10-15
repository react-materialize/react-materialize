import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Dropdown from '../src/Dropdown';
import Divider from '../src/Divider';
import mocker from './helper/new-mocker';

const defaultOptions = {
  alignment: 'left',
  autoTrigger: true,
  constrainWidth: true,
  container: null,
  coverTrigger: true,
  closeOnClick: true,
  hover: false,
  inDuration: 150,
  outDuration: 250,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null
};

describe('<Dropdown />', () => {
  const dropdownInit = vi.fn();
  const dropdownDestroy = vi.fn();
  let restore;

  beforeAll(() => {
    restore = mocker('Dropdown', { init: dropdownInit });
  });

  beforeEach(() => {
    dropdownInit.mockReset();
    dropdownDestroy.mockReset();
    dropdownInit.mockReturnValue({ destroy: dropdownDestroy });
  });

  afterAll(() => {
    restore();
  });

  const menuItems = () =>
    Array.from(screen.getByRole('list').children, li => ({
      className: li.className,
      text: li.textContent
    }));

  test('renders the trigger wired to the dropdown content', () => {
    render(<Dropdown trigger={<button type="button">Drop me!</button>} />);

    const trigger = screen.getByRole('button', { name: 'Drop me!' });
    const content = screen.getByRole('list');

    expect(trigger).toHaveClass('dropdown-trigger');
    expect(content).toHaveClass('dropdown-content');
    expect(content).toHaveAttribute('id', 'Dropdown_mockId');
    expect(trigger).toHaveAttribute('data-target', content.id);
    expect(content).toBeEmptyDOMElement();
  });

  test('keeps trigger classes and uses the given id and className', () => {
    render(
      <Dropdown
        id="menu"
        className="wide"
        trigger={
          <button type="button" className="btn">
            Drop me!
          </button>
        }
      />
    );

    const trigger = screen.getByRole('button', { name: 'Drop me!' });
    const content = screen.getByRole('list');

    expect(trigger).toHaveClass('btn', 'dropdown-trigger');
    expect(trigger).toHaveAttribute('data-target', 'menu');
    expect(content).toHaveAttribute('id', 'menu');
    expect(content).toHaveClass('dropdown-content', 'wide');
  });

  test('does correctly render dividers', () => {
    const { container } = render(
      <Dropdown trigger={<span>hi</span>}>
        <a href="#one">one</a>
        <Divider />
        <a href="#two">two</a>
      </Dropdown>
    );

    const divider = container.querySelector('ul > li.divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('tabindex', '-1');
    expect(divider).toBeEmptyDOMElement();
    expect(container.querySelector('div.divider')).not.toBeInTheDocument();
    expect(menuItems()).toEqual([
      { className: '', text: 'one' },
      { className: 'divider', text: '' },
      { className: '', text: 'two' }
    ]);
  });

  test('renders inline conditionals, normal links, and li nodes', () => {
    const showHidden = false;
    render(
      <Dropdown trigger={<span>hi</span>}>
        {showHidden && <a href="#hidden">Do Not Show Me</a>}
        <a href="#show">Show Me</a>
        <Divider />
        <li className="custom">
          <a href="#plain">No Additional Wrapper</a>
        </li>
      </Dropdown>
    );

    expect(screen.queryByText('Do Not Show Me')).not.toBeInTheDocument();
    expect(menuItems()).toEqual([
      { className: '', text: 'Show Me' },
      { className: 'divider', text: '' },
      { className: 'custom', text: 'No Additional Wrapper' }
    ]);

    const plainLink = screen.getByRole('link', {
      name: 'No Additional Wrapper'
    });
    expect(plainLink.parentElement).toHaveClass('custom');
    expect(plainLink.parentElement.parentElement).toBe(
      screen.getByRole('list')
    );
  });

  test('renders a single element', () => {
    render(
      <Dropdown trigger={<span>hi</span>}>
        <a href="#link">I'm a Link</a>
      </Dropdown>
    );

    const [item] = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(menuItems()).toHaveLength(1);
    expect(
      within(item).getByRole('link', { name: "I'm a Link" })
    ).toHaveAttribute('href', '#link');
  });

  test('renders fragments with other children', () => {
    render(
      <Dropdown trigger={<span>hi</span>}>
        {/* biome-ignore lint/complexity/noUselessFragments: fragment flattening is under test */}
        <>
          <a href="#one">One</a>
          <a href="#two">Two</a>
        </>
        <a href="#three">Three</a>
      </Dropdown>
    );

    expect(menuItems()).toEqual([
      { className: '', text: 'One' },
      { className: '', text: 'Two' },
      { className: '', text: 'Three' }
    ]);
    for (const link of screen.getAllByRole('link')) {
      expect(link.parentElement.tagName).toBe('LI');
    }
  });

  test('renders a single-child fragment', () => {
    render(
      <Dropdown trigger={<span>hi</span>}>
        {/* biome-ignore lint/complexity/noUselessFragments: fragment flattening is under test */}
        <>
          <a href="#fragment">Fragment</a>
        </>
      </Dropdown>
    );

    expect(menuItems()).toEqual([{ className: '', text: 'Fragment' }]);
    expect(
      screen.getByRole('link', { name: 'Fragment' }).parentElement.tagName
    ).toBe('LI');
  });

  test('does not forward trigger or options to the list, but forwards DOM props', () => {
    render(
      <Dropdown
        trigger={<span>hi</span>}
        options={{ hover: true }}
        data-testid="content"
        aria-label="Menu"
      />
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveAttribute('aria-label', 'Menu');
    expect(content).not.toHaveAttribute('options');
    expect(content).not.toHaveAttribute('hover');
    expect(content).not.toHaveAttribute('trigger');
    expect(content).not.toHaveTextContent('hi');
  });

  describe('initializes', () => {
    test('with default options if none are given', () => {
      render(<Dropdown trigger={<button type="button">Drop me!</button>} />);

      expect(dropdownInit).toHaveBeenCalledTimes(1);
      expect(dropdownInit).toHaveBeenCalledWith(
        screen.getByRole('button', { name: 'Drop me!' }),
        defaultOptions
      );
    });

    test('handles options prop', () => {
      const options = { constrainWidth: false, hover: true };
      render(
        <Dropdown
          trigger={<button type="button">Drop me!</button>}
          options={options}
        />
      );

      expect(dropdownInit).toHaveBeenCalledTimes(1);
      expect(dropdownInit).toHaveBeenCalledWith(
        screen.getByRole('button', { name: 'Drop me!' }),
        options
      );
    });

    test('re-initializes when options change', () => {
      const trigger = <button type="button">Drop me!</button>;
      const options = { hover: false };
      const { rerender } = render(
        <Dropdown trigger={trigger} options={options} />
      );

      const nextOptions = { hover: true };
      rerender(<Dropdown trigger={trigger} options={nextOptions} />);

      expect(dropdownDestroy).toHaveBeenCalledTimes(1);
      expect(dropdownInit).toHaveBeenCalledTimes(2);
      expect(dropdownInit).toHaveBeenLastCalledWith(
        screen.getByRole('button', { name: 'Drop me!' }),
        nextOptions
      );
    });

    test('should destroy when unmounted', () => {
      const { unmount } = render(
        <Dropdown trigger={<button type="button">Drop me!</button>} />
      );

      expect(dropdownDestroy).not.toHaveBeenCalled();
      unmount();
      expect(dropdownDestroy).toHaveBeenCalledTimes(1);
    });
  });
});
