import { render, screen } from '@testing-library/react';
import SideNav from '../src/SideNav';
import idgen from '../src/idgen';
import mocker from './helper/new-mocker';

describe('<SideNav />', () => {
  const destroyMock = vi.fn();
  const initMock = vi.fn(() => ({ destroy: destroyMock }));
  const restore = mocker('Sidenav', { init: initMock });
  const trigger = <button className="red">Show sidenav</button>;

  afterAll(() => {
    restore();
  });

  beforeEach(() => {
    initMock.mockClear();
    destroyMock.mockClear();
  });

  test('renders a trigger targeting the sidenav list', () => {
    const { container } = render(<SideNav trigger={trigger} />);

    const button = screen.getByRole('button', { name: 'Show sidenav' });
    expect(button).toHaveClass('red', 'sidenav-trigger', 'show-on-large');
    expect(button).not.toHaveClass('hide-on-large-only');
    expect(button).toHaveAttribute('data-target', 'SideNav-mockId');

    const list = container.querySelector('ul');
    expect(list).toHaveAttribute('id', 'SideNav-mockId');
    expect(list).toHaveClass('sidenav');
    expect(list).not.toHaveClass('sidenav-fixed');
  });

  test('can be `fixed`', () => {
    const { container } = render(<SideNav trigger={trigger} fixed />);
    expect(container.querySelector('ul')).toHaveClass(
      'sidenav',
      'sidenav-fixed'
    );
    const button = screen.getByRole('button', { name: 'Show sidenav' });
    expect(button).toHaveClass('sidenav-trigger', 'hide-on-large-only');
    expect(button).not.toHaveClass('show-on-large');
  });

  test('is `fixed` if no trigger is passed', () => {
    const { container } = render(<SideNav />);
    expect(container.querySelector('ul')).toHaveClass(
      'sidenav',
      'sidenav-fixed'
    );
    expect(screen.queryByRole('button')).toBeNull();
  });

  test('passes id to ul and to the trigger data-target', () => {
    const { container } = render(<SideNav trigger={trigger} id="test" />);
    expect(container.querySelector('ul')).toHaveAttribute('id', 'test');
    expect(screen.getByRole('button')).toHaveAttribute('data-target', 'test');
  });

  test('passes className and extra props to ul', () => {
    const { container } = render(
      <SideNav trigger={trigger} className="blue" data-foo="bar" />
    );
    const list = container.querySelector('ul');
    expect(list).toHaveClass('sidenav', 'blue');
    expect(list).toHaveAttribute('data-foo', 'bar');
  });

  test('renders children', () => {
    const { container } = render(
      <SideNav trigger={trigger}>
        <li className="test-child">Child</li>
      </SideNav>
    );

    const child = screen.getByRole('listitem');
    expect(child).toHaveClass('test-child');
    expect(child.parentElement).toBe(container.querySelector('ul.sidenav'));
  });

  describe('js init', () => {
    test('should call M.Sidenav.init with the list and the given options', () => {
      const options = {
        draggable: true,
        edge: 'right'
      };
      const { container } = render(
        <SideNav trigger={trigger} options={options} />
      );

      expect(initMock).toHaveBeenCalledTimes(1);
      expect(initMock).toHaveBeenCalledWith(
        container.querySelector('ul.sidenav'),
        options
      );
    });

    test('should be destroyed when unmounted', () => {
      const { unmount } = render(<SideNav />);
      expect(destroyMock).not.toHaveBeenCalled();
      unmount();

      expect(destroyMock).toHaveBeenCalledTimes(1);
    });
  });

  test('keeps its generated id across re-renders', () => {
    let n = 0;
    idgen.mockImplementation(() => n++);
    try {
      const { container, rerender } = render(<SideNav trigger={trigger} />);
      const before = container.querySelector('ul.sidenav').id;
      rerender(<SideNav trigger={trigger} />);
      expect(container.querySelector('ul.sidenav').id).toBe(before);
      expect(screen.getByRole('button')).toHaveAttribute('data-target', before);
    } finally {
      idgen.mockImplementation(() => 'mockId');
    }
  });
});
