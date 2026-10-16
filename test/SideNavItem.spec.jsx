import { render, screen } from '@testing-library/react';
import SideNavItem from '../src/SideNavItem';
import Icon from '../src/Icon';

describe('<SideNavItem />', () => {
  test('renders a list item with a default link', () => {
    render(<SideNavItem>Item</SideNavItem>);
    const item = screen.getByRole('listitem');
    expect(item).not.toHaveClass('divider');
    const link = screen.getByRole('link', { name: 'Item' });
    expect(item).toContainElement(link);
    expect(link).toHaveAttribute('href', '#!');
    expect(link).not.toHaveClass('subheader', 'waves-effect');
  });

  test('should render children inside the link', () => {
    render(
      <SideNavItem>
        <span className="test-child">child</span>
      </SideNavItem>
    );
    const child = screen.getByText('child');
    expect(child).toHaveClass('test-child');
    expect(child.parentElement).toBe(screen.getByRole('link'));
  });

  test('should render a user view instead of children for a userview', () => {
    const { container } = render(
      <SideNavItem userView user={{ name: 'John Doe', email: 'j@d.com' }}>
        <span className="test-child">child</span>
      </SideNavItem>
    );
    expect(screen.queryByText('child')).toBeNull();
    const userView = container.querySelector('li > .user-view');
    expect(userView).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toHaveClass('name');
    expect(screen.getByText('j@d.com')).toHaveClass('email');
  });

  test('should consume props it uses and pass the rest to the list item', () => {
    render(<SideNavItem id="test123" divider waves data-some-prop="true" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveAttribute('id', 'test123');
    expect(item).toHaveAttribute('data-some-prop', 'true');
    expect(item).not.toHaveAttribute('divider');
    expect(item).not.toHaveAttribute('waves');
  });

  test('should render a divider class when needed', () => {
    render(<SideNavItem divider />);
    expect(screen.getByRole('listitem')).toHaveClass('divider');
  });

  test('should render a subheader or a waves-effect class when needed', () => {
    render(
      <SideNavItem waves subheader>
        Item
      </SideNavItem>
    );
    expect(screen.getByRole('link', { name: 'Item' })).toHaveClass(
      'subheader',
      'waves-effect'
    );
  });

  test('should render an icon when needed', () => {
    render(<SideNavItem icon={<Icon>car</Icon>}>Cars</SideNavItem>);
    const icon = screen.getByText('car');
    expect(icon.tagName).toBe('I');
    expect(icon).toHaveClass('material-icons', 'prefix');
    expect(icon.parentElement).toBe(screen.getByRole('link'));
    expect(screen.getByRole('link')).toHaveTextContent('carCars');
  });

  test('should render a string icon', () => {
    render(<SideNavItem icon="car">Cars</SideNavItem>);
    const icon = screen.getByText('car');
    expect(icon.tagName).toBe('I');
    expect(icon).toHaveClass('material-icons', 'prefix');
    expect(icon.parentElement).toBe(screen.getByRole('link'));
  });

  test('keeps the icon element className', () => {
    render(
      <SideNavItem icon={<i className="material-icons red">car</i>}>
        Cars
      </SideNavItem>
    );
    expect(screen.getByText('car')).toHaveClass(
      'material-icons',
      'red',
      'prefix'
    );
  });

  test('should render a given href', () => {
    render(<SideNavItem href="www.test.nl">Item</SideNavItem>);
    expect(screen.getByRole('link', { name: 'Item' })).toHaveAttribute(
      'href',
      'www.test.nl'
    );
  });
});
