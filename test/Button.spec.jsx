import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../src/Button';
import mocker from './helper/new-mocker';

describe('Button', () => {
  test('renders a button with waves classes', () => {
    render(<Button waves="light">Stuff</Button>);
    const button = screen.getByRole('button', { name: 'Stuff' });
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveClass('btn', 'waves-effect', 'waves-light');
  });

  test('should apply large styles', () => {
    render(<Button large>Stuff</Button>);
    const button = screen.getByRole('button', { name: 'Stuff' });
    expect(button).toHaveClass('btn-large');
    expect(button).not.toHaveClass('btn');
  });

  test('should apply small styles', () => {
    render(<Button small>Stuff</Button>);
    expect(screen.getByRole('button', { name: 'Stuff' })).toHaveClass(
      'btn-small'
    );
  });

  test('should apply floating styles', () => {
    render(<Button floating>Stuff</Button>);
    expect(screen.getByRole('button', { name: 'Stuff' })).toHaveClass(
      'btn-floating'
    );
  });

  test('should apply flat styles', () => {
    render(<Button flat>Stuff</Button>);
    expect(screen.getByRole('button', { name: 'Stuff' })).toHaveClass(
      'btn-flat'
    );
  });

  test('applies modal action class and custom className', () => {
    render(
      <Button modal="close" className="red">
        Stuff
      </Button>
    );
    expect(screen.getByRole('button', { name: 'Stuff' })).toHaveClass(
      'btn',
      'modal-close',
      'red'
    );
  });

  test('renders the given node type', () => {
    render(
      <Button node="a" href="#target">
        Link
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('href', '#target');
    expect(link).toHaveClass('btn');
  });

  test('renders icon before children', () => {
    render(<Button icon={<i data-testid="icon">cloud</i>}>Stuff</Button>);
    const button = screen.getByRole('button');
    expect(button.firstChild).toBe(screen.getByTestId('icon'));
    expect(button).toHaveTextContent('cloudStuff');
  });

  test('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick}>Stuff</Button>);
    await user.click(screen.getByRole('button', { name: 'Stuff' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('with a disabled prop', () => {
    test('should have a disabled class', () => {
      render(<Button disabled>Stuff</Button>);
      expect(screen.getByRole('button', { name: 'Stuff' })).toHaveClass(
        'btn',
        'disabled'
      );
    });

    test('should have a disabled attribute', () => {
      render(<Button disabled>Stuff</Button>);
      expect(screen.getByRole('button', { name: 'Stuff' })).toBeDisabled();
    });

    test('does not call onClick', async () => {
      const onClick = vi.fn();
      const user = userEvent.setup();
      render(
        <Button disabled onClick={onClick}>
          Stuff
        </Button>
      );
      await user.click(screen.getByRole('button', { name: 'Stuff' }));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('with a tooltip', () => {
    const tooltipInitMock = vi.fn();
    const tooltipInstanceDestroyMock = vi.fn();
    let restore;
    const tooltip = 'Hello';
    const tooltipOptions = {
      position: 'top',
      delay: 50
    };

    beforeEach(() => {
      tooltipInitMock.mockReset();
      tooltipInstanceDestroyMock.mockReset();
      tooltipInitMock.mockReturnValue({ destroy: tooltipInstanceDestroyMock });
      restore = mocker('Tooltip', { init: tooltipInitMock });
    });

    afterEach(() => {
      restore();
    });

    test('renders the tooltip text as data-tooltip', () => {
      render(<Button tooltip={tooltip}>Stuff</Button>);
      expect(screen.getByRole('button', { name: 'Stuff' })).toHaveAttribute(
        'data-tooltip',
        tooltip
      );
    });

    test('initializes Button with tooltip', () => {
      render(<Button tooltip={tooltip}>Stuff</Button>);
      expect(tooltipInitMock).toHaveBeenCalledWith(
        screen.getByRole('button', { name: 'Stuff' }),
        {}
      );
    });

    test('initializes Button with tooltip options', () => {
      render(
        <Button tooltip={tooltip} tooltipOptions={tooltipOptions}>
          Stuff
        </Button>
      );

      expect(tooltipInitMock).toHaveBeenCalledTimes(1);
      expect(tooltipInitMock).toHaveBeenCalledWith(
        screen.getByRole('button', { name: 'Stuff' }),
        tooltipOptions
      );
    });

    test('does not initialize a tooltip without tooltip prop', () => {
      render(<Button>Stuff</Button>);
      expect(tooltipInitMock).not.toHaveBeenCalled();
      expect(screen.getByRole('button')).not.toHaveAttribute('data-tooltip');
    });

    test('destroyed when unmounted', () => {
      const { unmount } = render(<Button tooltip={tooltip}>Stuff</Button>);
      expect(tooltipInstanceDestroyMock).not.toHaveBeenCalled();
      unmount();

      expect(tooltipInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('with fixed action button', () => {
    const fabInitMock = vi.fn();
    const fabInstanceDestroyMock = vi.fn();
    let restore;
    const fabOptions = {
      direction: 'left',
      hoverEnabled: false,
      toolbarEnabled: true
    };
    const FabButton = (fab = true) => (
      <Button floating fab={fab} className="red" large>
        <Button floating icon="insert_chart" className="red" />
        <Button floating icon="format_quote" className="yellow darken-1" />
        <Button floating icon="publish" className="green" />
        <Button floating icon="attach_file" className="blue" />
      </Button>
    );

    beforeEach(() => {
      fabInitMock.mockReset();
      fabInstanceDestroyMock.mockReset();
      fabInitMock.mockReturnValue({ destroy: fabInstanceDestroyMock });
      restore = mocker('FloatingActionButton', { init: fabInitMock });
    });

    afterEach(() => {
      restore();
    });

    test('renders FAB structure with children as actions', () => {
      const { container } = render(FabButton());
      const wrapper = container.firstChild;
      expect(wrapper.tagName).toBe('DIV');
      expect(wrapper).toHaveClass('fixed-action-btn');
      expect(wrapper).not.toHaveClass('toolbar');

      const trigger = wrapper.querySelector(':scope > a');
      expect(trigger).toHaveClass('btn-floating', 'btn-large', 'red');
      expect(trigger.querySelector('i.material-icons')).toHaveTextContent(
        'edit'
      );

      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(4);
      expect(within(items[0]).getByRole('button')).toHaveClass(
        'btn-floating',
        'red'
      );
      expect(within(items[0]).getByRole('button')).toHaveTextContent(
        'insert_chart'
      );
      expect(within(items[3]).getByRole('button')).toHaveTextContent(
        'attach_file'
      );
    });

    test('uses the icon prop for the FAB trigger', () => {
      const { container } = render(
        <Button fab icon={<i data-testid="fab-icon">add</i>}>
          <Button floating icon="publish" />
        </Button>
      );
      const trigger = container.querySelector('.fixed-action-btn > a');
      expect(trigger).toContainElement(screen.getByTestId('fab-icon'));
      expect(trigger).not.toHaveTextContent('edit');
    });

    test('adds toolbar class when toolbarEnabled', () => {
      const { container } = render(FabButton(fabOptions));
      expect(container.firstChild).toHaveClass('fixed-action-btn', 'toolbar');
    });

    test('initializes FloatingActionButton instance on the wrapper', () => {
      const { container } = render(FabButton());
      expect(fabInitMock).toHaveBeenCalledTimes(1);
      expect(fabInitMock).toHaveBeenCalledWith(container.firstChild, true);
    });

    test('initializes FloatingActionButton with fab options', () => {
      const { container } = render(FabButton(fabOptions));
      expect(fabInitMock).toHaveBeenCalledWith(
        container.firstChild,
        fabOptions
      );
    });

    test('accepts FAB as object', () => {
      const fab = { hoverEnabled: false };
      const { container } = render(FabButton(fab));
      expect(fabInitMock).toHaveBeenCalledWith(container.firstChild, fab);
    });

    test('does not initialize FloatingActionButton without fab', () => {
      render(<Button>Stuff</Button>);
      expect(fabInitMock).not.toHaveBeenCalled();
    });

    test('destroys FloatingActionButton instance when unmounted', () => {
      const { unmount } = render(FabButton());
      expect(fabInstanceDestroyMock).not.toHaveBeenCalled();
      unmount();

      expect(fabInstanceDestroyMock).toHaveBeenCalledTimes(1);
    });
  });
});
