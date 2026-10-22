import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from '../src/Tabs';
import Tab from '../src/Tab';
import idgen from '../src/idgen';
import mocker from './helper/new-mocker';

describe('Tabs', () => {
  const tabsInitMock = vi.fn();
  const tabInstanceDestroyMock = vi.fn();
  let restore;

  const options = {
    duration: 400,
    onShow: vi.fn(),
    swipeable: true,
    responsiveThreshold: 2
  };

  beforeEach(() => {
    tabsInitMock.mockReset();
    tabInstanceDestroyMock.mockReset();
    tabsInitMock.mockReturnValue({ destroy: tabInstanceDestroyMock });
    restore = mocker('Tabs', { init: tabsInitMock });
  });

  afterEach(() => {
    restore();
  });

  test('should create list of Tab items', () => {
    const { container } = render(
      <Tabs>
        <Tab title="one">One</Tab>
        <Tab title="Two">Two</Tab>
      </Tabs>
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass('tabs');

    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(2);
    for (const item of items) {
      expect(item).toHaveClass('tab', 'col');
    }

    const links = within(list).getAllByRole('link');
    expect(links.map(link => link.textContent)).toEqual(['one', 'Two']);
    expect(links[0]).toHaveAttribute('href', '#tab_tabs-mockId0');
    expect(links[1]).toHaveAttribute('href', '#tab_tabs-mockId1');
    for (const link of links) {
      expect(link).not.toHaveClass('active');
    }

    const row = container.querySelector('.row');
    const panels = row.querySelectorAll(':scope > .col.s12');
    expect(panels).toHaveLength(2);
    expect(panels[0]).toHaveAttribute('id', 'tab_tabs-mockId0');
    expect(panels[0]).toHaveTextContent('One');
    expect(panels[1]).toHaveAttribute('id', 'tab_tabs-mockId1');
    expect(panels[1]).toHaveTextContent('Two');
  });

  test('applies className to the tab list', () => {
    render(
      <Tabs className="tab-demo z-depth-1">
        <Tab title="one">One</Tab>
      </Tabs>
    );
    expect(screen.getByRole('list')).toHaveClass(
      'tabs',
      'tab-demo',
      'z-depth-1'
    );
  });

  test('uses scope to build tab ids', () => {
    render(
      <Tabs scope="demo">
        <Tab title="one">One</Tab>
      </Tabs>
    );
    expect(screen.getByRole('link', { name: 'one' })).toHaveAttribute(
      'href',
      '#tab_demo0'
    );
    expect(document.getElementById('tab_demo0')).toHaveTextContent('One');
  });

  test('marks active tab', () => {
    render(
      <Tabs>
        <Tab title="one">One</Tab>
        <Tab title="Two" active>
          Two
        </Tab>
      </Tabs>
    );
    expect(screen.getByRole('link', { name: 'one' })).not.toHaveClass('active');
    expect(screen.getByRole('link', { name: 'Two' })).toHaveClass('active');
  });

  test('marks tab matching defaultValue as active', () => {
    render(
      <Tabs defaultValue="b">
        <Tab idx="a" title="one">
          One
        </Tab>
        <Tab idx="b" title="Two">
          Two
        </Tab>
      </Tabs>
    );
    expect(screen.getByRole('link', { name: 'one' })).not.toHaveClass('active');
    expect(screen.getByRole('link', { name: 'Two' })).toHaveClass('active');
  });

  test('marks disabled tab and applies tabWidth', () => {
    render(
      <Tabs>
        <Tab title="one" tabWidth={3}>
          One
        </Tab>
        <Tab title="Two" disabled>
          Two
        </Tab>
      </Tabs>
    );
    const [first, second] = screen.getAllByRole('listitem');
    expect(first).toHaveClass('tab', 'col', 's3');
    expect(first).not.toHaveClass('disabled');
    expect(second).toHaveClass('tab', 'col', 'disabled');
  });

  describe('onChange', () => {
    test('is called when an enabled tab is clicked', async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Tabs onChange={onChange}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
      await user.click(screen.getByRole('link', { name: 'Two' }));
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0].target).toBe(
        screen.getByRole('link', { name: 'Two' })
      );
    });

    test('is not called when a disabled tab is clicked', async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Tabs onChange={onChange}>
          <Tab title="one">One</Tab>
          <Tab title="Two" disabled>
            Two
          </Tab>
        </Tabs>
      );
      await user.click(screen.getByRole('link', { name: 'Two' }));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('with options', () => {
    test('initializes Tabs on the list with options', () => {
      render(
        <Tabs options={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );

      expect(tabsInitMock).toHaveBeenLastCalledWith(
        screen.getByRole('list'),
        options
      );
    });
  });

  test('keeps its generated scope across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const tab = <Tab title="one">One</Tab>;
      const { rerender } = render(<Tabs>{tab}</Tabs>);
      const link = () => screen.getByRole('link', { name: 'one' });
      const before = link().getAttribute('href');
      rerender(<Tabs>{tab}</Tabs>);

      expect(link()).toHaveAttribute('href', before);
      expect(document.getElementById(before.slice(1))).toHaveTextContent('One');
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });

  describe('when unmounted', () => {
    test('should be destroyed', () => {
      const { unmount } = render(
        <Tabs options={options}>
          <Tab title="one">One</Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );
      tabInstanceDestroyMock.mockClear();
      unmount();

      expect(tabInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('children with idx', () => {
    test('consumes passed idx', () => {
      render(
        <Tabs options={options}>
          <Tab idx="one" title="one">
            One
          </Tab>
          <Tab title="Two">Two</Tab>
        </Tabs>
      );

      expect(screen.getByRole('link', { name: 'one' })).toHaveAttribute(
        'href',
        '#tab_one'
      );
      expect(document.getElementById('tab_one')).toHaveTextContent('One');
      expect(screen.getByRole('link', { name: 'Two' })).toHaveAttribute(
        'href',
        '#tab_tabs-mockId1'
      );
    });
  });
});
