import { render, screen } from '@testing-library/react';
import CardTitle from '../src/CardTitle';

describe('<CardTitle />', () => {
  test('renders the image and title inside card-image', () => {
    const { container } = render(
      <CardTitle className="find" image="url.jpg" data-testid="title">
        I am a very simple card
      </CardTitle>
    );
    const wrapper = screen.getByTestId('title');

    expect(container.firstChild).toBe(wrapper);
    expect(wrapper).toHaveClass('find', 'card-image', { exact: true });

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'url.jpg');
    expect(img).not.toHaveClass('activator');
    expect(wrapper.firstChild).toBe(img);

    const title = wrapper.lastChild;
    expect(title.tagName).toBe('SPAN');
    expect(title).toHaveClass('card-title');
    expect(title).toHaveTextContent('I am a very simple card');
  });

  test('image is the reveal activator when `reveal` is set', () => {
    render(
      <CardTitle image="url.jpg" reveal>
        I am a very simple card
      </CardTitle>
    );

    expect(screen.getByRole('img')).toHaveClass('activator', { exact: true });
  });

  test('can have waves', () => {
    const { container } = render(
      <CardTitle image="url.jpg" waves="green">
        I am a very simple card
      </CardTitle>
    );

    expect(container.firstChild).toHaveClass(
      'card-image',
      'waves-effect',
      'waves-block',
      'waves-green'
    );
  });
});
