import React from 'react';
import { render, screen } from '@testing-library/react';
import Slide from '../src/Slide';

describe('<Slide />', () => {
  test('should render a Slide', () => {
    render(<Slide image={<img src="#" alt="slide" />} />);
    const slide = screen.getByRole('listitem');
    const img = screen.getByRole('img', { name: 'slide' });

    expect(slide.firstChild).toBe(img);
    expect(img).toHaveAttribute('src', '#');
  });

  test('can render a picture element', () => {
    const { container } = render(
      <Slide
        image={
          <picture>
            <source srcSet="#webp" type="image/webp" />
            <source srcSet="#jpg" type="image/jpg" />
            <img src="#" alt="picture" />
          </picture>
        }
      />
    );
    const picture = screen.getByRole('listitem').firstChild;

    expect(picture.tagName).toBe('PICTURE');
    const sources = container.querySelectorAll('picture > source');
    expect(sources).toHaveLength(2);
    expect(sources[0]).toHaveAttribute('srcset', '#webp');
    expect(sources[0]).toHaveAttribute('type', 'image/webp');
    expect(sources[1]).toHaveAttribute('srcset', '#jpg');
    expect(sources[1]).toHaveAttribute('type', 'image/jpg');
    expect(screen.getByRole('img', { name: 'picture' }).parentElement).toBe(
      picture
    );
  });

  test('can render a custom caption', () => {
    render(
      <Slide image={<img src="#" alt="slide" />}>
        <h2>test</h2>
      </Slide>
    );
    const slide = screen.getByRole('listitem');
    const heading = screen.getByRole('heading', { level: 2, name: 'test' });

    expect(slide.children).toHaveLength(2);
    expect(slide.children[0]).toBe(screen.getByRole('img'));
    expect(slide.children[1]).toBe(heading);
  });
});
