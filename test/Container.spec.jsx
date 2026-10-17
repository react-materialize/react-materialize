import { render, screen } from '@testing-library/react';
import Container from '../src/Container';

describe('<Container />', () => {
  test('renders a div with the container class', () => {
    const { container } = render(<Container className="extra" id="main" />);
    const el = container.firstElementChild;

    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('container', 'extra');
    expect(el).toHaveAttribute('id', 'main');
  });

  test('renders children', () => {
    const { container } = render(
      <Container>
        <p>yes</p>
      </Container>
    );

    const child = screen.getByText('yes');
    expect(child.tagName).toBe('P');
    expect(child.parentElement).toBe(container.querySelector('.container'));
  });
});
