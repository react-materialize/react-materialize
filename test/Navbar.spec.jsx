import { render, screen, within } from '@testing-library/react';
import Navbar from '../src/Navbar';
import mocker from './helper/new-mocker';

describe('<Navbar />', () => {
  const destroyMock = vi.fn();
  const initMock = vi.fn(() => ({ destroy: destroyMock }));
  const restore = mocker('Sidenav', { init: initMock });

  beforeEach(() => {
    initMock.mockClear();
    destroyMock.mockClear();
  });

  afterAll(() => {
    restore();
  });

  const getSidenav = container => container.querySelector('ul.sidenav');

  test('renders brand, menu trigger and links in the nav and the sidenav', () => {
    const { container } = render(
      <Navbar brand={<a href="/">Logo</a>} alignLinks="right">
        <a href="get-started.html">Getting started</a>
        <a href="components.html">Components</a>
      </Navbar>
    );

    const nav = screen.getByRole('navigation');
    expect(nav.querySelector('.nav-wrapper')).not.toHaveClass('container');

    const brand = within(nav).getByRole('link', { name: 'Logo' });
    expect(brand).toHaveClass('brand-logo');
    expect(brand).not.toHaveClass('right');
    expect(brand).toHaveAttribute('href', '/');

    const trigger = within(nav).getByRole('link', { name: 'menu' });
    expect(trigger).toHaveClass('sidenav-trigger');
    expect(trigger).toHaveAttribute('data-target', 'mobile-nav');
    expect(trigger).toHaveAttribute('href', '#!');

    const navLinks = nav.querySelector('ul.hide-on-med-and-down');
    expect(navLinks).toHaveClass('right');
    const navItems = within(navLinks).getAllByRole('listitem');
    expect(navItems).toHaveLength(2);
    expect(within(navItems[0]).getByRole('link')).toHaveAttribute(
      'href',
      'get-started.html'
    );
    expect(within(navItems[1]).getByRole('link')).toHaveAttribute(
      'href',
      'components.html'
    );

    const sidenav = getSidenav(container);
    expect(sidenav).toHaveAttribute('id', 'mobile-nav');
    expect(sidenav).toHaveClass('right');
    expect(sidenav.parentElement).toBe(container);
    const sidenavItems = within(sidenav).getAllByRole('listitem');
    expect(sidenavItems).toHaveLength(2);
    expect(sidenavItems[0]).toHaveTextContent('Getting started');
    expect(sidenavItems[1]).toHaveTextContent('Components');
  });

  test('passes extra props to the nav element', () => {
    render(<Navbar className="blue" data-testid="nav" />);
    const nav = screen.getByTestId('nav');
    expect(nav.tagName).toBe('NAV');
    expect(nav).toHaveClass('blue');
    expect(nav).not.toHaveClass('nav-extended');
  });

  test('sidenav get initialized with default options if none are given', () => {
    const { container } = render(<Navbar />);
    expect(initMock).toHaveBeenLastCalledWith(getSidenav(container), {
      edge: 'left',
      draggable: true,
      inDuration: 250,
      outDuration: 200,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null,
      preventScrolling: true
    });
  });

  test('sidenav gets initialized with the given options', () => {
    const options = { edge: 'right', draggable: false };
    const { container } = render(<Navbar options={options} />);
    expect(initMock).toHaveBeenCalledWith(getSidenav(container), options);
  });

  test('sidenav gets destroyed when unmounted', () => {
    const { unmount } = render(<Navbar />);
    destroyMock.mockClear();
    unmount();
    expect(destroyMock).toHaveBeenCalledTimes(1);
  });

  test('can center the brand logo', () => {
    render(<Navbar brand={<a href="/">Logo</a>} centerLogo />);
    const brand = screen.getByRole('link', { name: 'Logo' });
    expect(brand).toHaveClass('brand-logo', 'center');
    expect(brand).not.toHaveClass('right');
  });

  test('can constrain its children to a container', () => {
    render(
      <Navbar brand={<a href="/">Logo</a>} centerChildren>
        <a href="get-started.html">Getting started</a>
        <a href="components.html">Components</a>
      </Navbar>
    );
    const wrapper = screen
      .getByRole('navigation')
      .querySelector('.nav-wrapper');
    expect(wrapper).toHaveClass('container');
    expect(
      within(wrapper).getByRole('link', { name: 'Getting started' })
    ).toBeInTheDocument();
  });

  test('places brand on right if navbar is left aligned', () => {
    const { container } = render(
      <Navbar brand={<a href="/">Logo</a>} alignLinks="left" />
    );
    expect(screen.getByRole('link', { name: 'Logo' })).toHaveClass(
      'brand-logo',
      'right'
    );
    expect(container.querySelector('ul.hide-on-med-and-down')).toHaveClass(
      'left'
    );
    expect(getSidenav(container)).toHaveClass('left');
  });

  test('adds a brand node', () => {
    render(<Navbar brand={<span className="brando">I AM BRAND</span>} />);
    const brand = screen.getByText('I AM BRAND');
    expect(brand.tagName).toBe('SPAN');
    expect(brand).toHaveClass('brando', 'brand-logo');
  });

  test('can be fixed', () => {
    const { container } = render(<Navbar fixed />);
    const fixedWrapper = container.querySelector('.navbar-fixed');
    expect(fixedWrapper).toContainElement(screen.getByRole('navigation'));
    expect(fixedWrapper).not.toContainElement(getSidenav(container));
  });

  test('is not fixed by default', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('.navbar-fixed')).toBeNull();
  });

  test('can be extended with custom elements', () => {
    render(
      <Navbar
        extendWith={
          <div className="col s12">
            <a href="#!" className="breadcrumb">
              First
            </a>
            <a href="#!" className="breadcrumb">
              Second
            </a>
            <a href="#!" className="breadcrumb">
              Third
            </a>
          </div>
        }
      />
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nav-extended');
    const content = nav.querySelector('.nav-content');
    expect(content.querySelectorAll('.breadcrumb')).toHaveLength(3);
    expect(within(content).getByRole('link', { name: 'Second' })).toHaveClass(
      'breadcrumb'
    );
  });

  test('can have custom id', () => {
    const { container } = render(<Navbar id="custom-id" />);
    expect(getSidenav(container)).toHaveAttribute('id', 'custom-id');
    expect(screen.getByRole('link', { name: 'menu' })).toHaveAttribute(
      'data-target',
      'custom-id'
    );
  });

  test('can have children with custom ids', () => {
    const { container } = render(
      <Navbar>
        <span id="custom-1">Custom 1</span>
        <span id="custom-2">Custom 2</span>
      </Navbar>
    );
    const navLinks = screen
      .getByRole('navigation')
      .querySelector('ul.hide-on-med-and-down');
    expect(within(navLinks).getByText('Custom 1')).toHaveAttribute(
      'id',
      'custom-1'
    );
    expect(within(navLinks).getByText('Custom 2')).toHaveAttribute(
      'id',
      'custom-2'
    );

    const sidenav = getSidenav(container);
    expect(within(sidenav).getByText('Custom 1')).toHaveAttribute(
      'id',
      'sidenav-custom-1'
    );
    expect(within(sidenav).getByText('Custom 2')).toHaveAttribute(
      'id',
      'sidenav-custom-2'
    );
  });

  test('can have custom sidenav', () => {
    const { container } = render(
      <Navbar
        brand={<a href="/">Logo</a>}
        alignLinks="left"
        sidenav={<li className="custom-node">Custom node!</li>}
      >
        <a href="get-started.html">Getting started</a>
      </Navbar>
    );
    const sidenav = getSidenav(container);
    const items = within(sidenav).getAllByRole('listitem');
    expect(items).toHaveLength(1);
    expect(items[0]).toHaveClass('custom-node');
    expect(items[0]).toHaveTextContent('Custom node!');
    expect(within(sidenav).queryByText('Getting started')).toBeNull();
  });

  test('renders a search form instead of brand and links', () => {
    render(
      <Navbar search brand={<a href="/">Logo</a>}>
        <a href="get-started.html">Getting started</a>
      </Navbar>
    );
    const nav = screen.getByRole('navigation');
    expect(within(nav).getByRole('searchbox')).toBeInTheDocument();
    expect(within(nav).queryByRole('link', { name: 'Logo' })).toBeNull();
    expect(nav.querySelector('.sidenav-trigger')).toBeNull();
  });

  test('does not re-initialise when re-rendered with the same props', () => {
    const brand = <a href="/">Logo</a>;
    const { rerender } = render(<Navbar brand={brand} />);
    initMock.mockClear();
    rerender(<Navbar brand={brand} />);

    expect(initMock).not.toHaveBeenCalled();
  });
});
