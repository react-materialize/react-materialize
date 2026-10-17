import { render, screen } from '@testing-library/react';
import UserView from '../src/UserView';

describe('<UserView />', () => {
  test('renders background, image, name and email', () => {
    const { container } = render(
      <UserView
        background="bg.jpg"
        image="me.jpg"
        name="John Doe"
        email="john@doe.com"
      />
    );

    const userView = container.firstChild;
    expect(userView).toHaveClass('user-view');

    const background = userView.querySelector('.background > img');
    expect(background).toHaveAttribute('src', 'bg.jpg');

    const avatar = userView.querySelector('img.circle');
    expect(avatar).toHaveAttribute('src', 'me.jpg');
    expect(avatar.parentElement).toHaveAttribute('href', '#!user');

    const name = screen.getByText('John Doe');
    expect(name).toHaveClass('white-text', 'name');
    expect(name.parentElement).toHaveAttribute('href', '#!name');

    const email = screen.getByText('john@doe.com');
    expect(email).toHaveClass('white-text', 'email');
    expect(email.parentElement).toHaveAttribute('href', '#!email');
  });

  test('omits sections whose props are not given', () => {
    const { container } = render(<UserView name="John Doe" />);
    const userView = container.firstChild;
    expect(userView).toHaveClass('user-view');
    expect(userView.querySelector('.background')).toBeNull();
    expect(userView.querySelector('img')).toBeNull();
    expect(userView.querySelector('.email')).toBeNull();
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  test('renders an empty user view without props', () => {
    const { container } = render(<UserView />);
    expect(container.firstChild).toHaveClass('user-view');
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
