import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Collapsible from '../src/Collapsible';
import CollapsibleItem from '../src/CollapsibleItem';
import mocker from './helper/new-mocker';

describe('<Collapsible />', () => {
  const collapsibleInitMock = vi.fn();
  const collapsibleInstanceDestroyMock = vi.fn();
  const collapsibleMock = {
    init: (el, options) => {
      collapsibleInitMock(el, options);
      return {
        destroy: collapsibleInstanceDestroyMock
      };
    }
  };
  const restore = mocker('Collapsible', collapsibleMock);

  const options = {
    accordion: true,
    onOpenStart: () => {},
    inDuration: 100,
    outDuration: 50
  };

  beforeEach(() => {
    collapsibleInitMock.mockClear();
    collapsibleInstanceDestroyMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  test('initializes Collapsible on the list with options', () => {
    const { container } = render(<Collapsible options={options} />);
    const list = container.querySelector('ul');

    expect(collapsibleInitMock).toHaveBeenLastCalledWith(list, {
      accordion: true,
      ...options
    });
  });

  test('passes accordion: false to init when expandable', () => {
    const { container } = render(<Collapsible accordion={false} />);

    expect(collapsibleInitMock).toHaveBeenCalledWith(
      container.querySelector('ul'),
      { accordion: false }
    );
  });

  test('destroyed when unmounted', () => {
    const { unmount } = render(<Collapsible options={options} />);
    collapsibleInstanceDestroyMock.mockClear();

    unmount();
    expect(collapsibleInstanceDestroyMock).toHaveBeenCalledTimes(1);
  });

  test('renders an accordion by default', () => {
    render(<Collapsible className="extra" />);
    const list = screen.getByRole('list');

    expect(list).toHaveClass('collapsible', 'extra');
    expect(list).not.toHaveClass('expandable');
    expect(list).toHaveAttribute('data-collapsible', 'accordion');
  });

  test('expandable', () => {
    render(<Collapsible accordion={false} />);
    const list = screen.getByRole('list');

    expect(list).toHaveClass('collapsible', 'expandable');
    expect(list).toHaveAttribute('data-collapsible', 'expandable');
  });

  test('popout', () => {
    render(<Collapsible popout />);
    expect(screen.getByRole('list')).toHaveClass('collapsible', 'popout');
  });

  test('renders items with header and body', () => {
    const { container } = render(
      <Collapsible>
        <CollapsibleItem header="First">A</CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    const headers = container.querySelectorAll('li > .collapsible-header');
    const bodies = container.querySelectorAll('li > .collapsible-body');
    expect(headers).toHaveLength(2);
    expect(headers[0]).toHaveTextContent('First');
    expect(headers[1]).toHaveTextContent('Second');
    expect(bodies[0]).toHaveTextContent('A');
    expect(bodies[1]).toHaveTextContent('B');
  });

  test('with invalid elements', () => {
    render(
      <Collapsible>
        <CollapsibleItem header="First">A</CollapsibleItem>
        {null}
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('FirstA');
    expect(items[1]).toHaveTextContent('SecondB');
  });

  test('with expanded prop', () => {
    render(
      <Collapsible>
        <CollapsibleItem expanded header="First">
          A
        </CollapsibleItem>
        <CollapsibleItem header="Second">B</CollapsibleItem>
      </Collapsible>
    );

    const [first, second] = screen.getAllByRole('listitem');
    expect(first).toHaveClass('active');
    expect(first.querySelector('.collapsible-header')).toHaveClass('active');
    expect(second).not.toHaveClass('active');
    expect(second.querySelector('.collapsible-header')).not.toHaveClass(
      'active'
    );
  });

  test('onSelect called with the clicked item index', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Collapsible accordion onSelect={onSelect}>
        <CollapsibleItem header="A">A</CollapsibleItem>
        <CollapsibleItem header="B">B</CollapsibleItem>
        <CollapsibleItem header="C">C</CollapsibleItem>
        <CollapsibleItem header="D">D</CollapsibleItem>
        <CollapsibleItem header="E">E</CollapsibleItem>
      </Collapsible>
    );

    const headers = document.querySelectorAll('.collapsible-header');
    await user.click(headers[3]);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(3);

    await user.click(headers[0]);
    expect(onSelect).toHaveBeenCalledTimes(2);
    expect(onSelect).toHaveBeenLastCalledWith(0);
  });

  test('onSelect called with the clicked item index when expandable', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Collapsible accordion={false} onSelect={onSelect}>
        <CollapsibleItem header="A">A</CollapsibleItem>
        <CollapsibleItem header="B">B</CollapsibleItem>
      </Collapsible>
    );

    await user.click(document.querySelectorAll('.collapsible-header')[1]);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(1);
  });

  test('defaultActiveKey expands the matching item on mount', () => {
    render(
      <Collapsible accordion defaultActiveKey={1}>
        <CollapsibleItem header="A">a</CollapsibleItem>
        <CollapsibleItem header="B">b</CollapsibleItem>
      </Collapsible>
    );

    const [first, second] = screen.getAllByRole('listitem');
    expect(second).toHaveClass('active');
    expect(second.querySelector('.collapsible-header')).toHaveClass('active');
    expect(first).not.toHaveClass('active');
  });

  test('accordion moves the active item from defaultActiveKey on click', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible accordion defaultActiveKey={1}>
        <CollapsibleItem header="A">a</CollapsibleItem>
        <CollapsibleItem header="B">b</CollapsibleItem>
      </Collapsible>
    );

    await user.click(screen.getByText('A'));

    const [first, second] = screen.getAllByRole('listitem');
    expect(first).toHaveClass('active');
    expect(second).not.toHaveClass('active');
  });

  describe('undefined M', () => {
    let __M;
    beforeEach(() => {
      __M = globalThis.M;
      globalThis.M = undefined;
    });
    afterEach(() => {
      globalThis.M = __M;
    });
    test('doesnt throw without M', () => {
      expect(() =>
        render(
          <Collapsible accordion>
            <CollapsibleItem header="A">A</CollapsibleItem>
          </Collapsible>
        )
      ).not.toThrow();
      expect(screen.getByRole('listitem')).toHaveTextContent('A');
    });
  });
});

describe('<Collapsible /> with real M.Collapsible', () => {
  test('init opens the body of the defaultActiveKey item', () => {
    render(
      <Collapsible accordion defaultActiveKey={1}>
        <CollapsibleItem header="A">a</CollapsibleItem>
        <CollapsibleItem header="B">b</CollapsibleItem>
      </Collapsible>
    );

    // jsdom has no stylesheet, so check the inline style Materialize sets.
    expect(screen.getByText('b').style.display).toBe('block');
    expect(screen.getByText('a').style.display).toBe('');
  });
});
