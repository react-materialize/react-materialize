import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavItem from '../src/NavItem';

describe('<NavItem />', () => {
  test('renders a link with text', () => {
    render(<NavItem href="get-started.html">Getting</NavItem>);

    expect(screen.getByRole('link', { name: 'Getting' })).toHaveAttribute(
      'href',
      'get-started.html'
    );
  });

  test('passes node as a child', () => {
    render(
      <NavItem href="get-started.html">
        <p>Go Home</p>
      </NavItem>
    );

    const link = screen.getByRole('link', { name: 'Go Home' });
    const paragraph = screen.getByText('Go Home');
    expect(paragraph.tagName).toBe('P');
    expect(paragraph.parentElement).toBe(link);
  });

  test('can be a divider', () => {
    const { container } = render(
      <NavItem divider href="get-started.html">
        Getting
      </NavItem>
    );

    const item = screen.getByRole('listitem');
    expect(item).toHaveClass('divider');
    expect(item).toBeEmptyDOMElement();
    expect(container.children).toHaveLength(1);
    expect(screen.queryByRole('link')).toBeNull();
  });

  test('handles multiple childs', () => {
    render(
      <NavItem href="get-started.html">
        <span>hello</span>
        <h2>World</h2>
      </NavItem>
    );

    const link = screen.getByRole('link');
    expect(screen.getByText('hello').parentElement).toBe(link);
    expect(screen.getByRole('heading', { name: 'World' }).parentElement).toBe(
      link
    );
  });

  test('passes onClick as parameter', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<NavItem onClick={onClick}>Getting</NavItem>);

    const item = screen.getByText('Getting');
    expect(item.tagName).toBe('A');
    expect(item).not.toHaveAttribute('href');

    await user.click(item);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('passes other props to the anchor', () => {
    render(
      <NavItem href="get-started.html" className="active" id="nav-1">
        Getting
      </NavItem>
    );

    const link = screen.getByRole('link', { name: 'Getting' });
    expect(link).toHaveClass('active');
    expect(link).toHaveAttribute('id', 'nav-1');
  });
});
