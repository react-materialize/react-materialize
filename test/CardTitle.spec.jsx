import React from 'react';
import { render } from '@testing-library/react';
import CardTitle from '../src/CardTitle';

describe('<CardTitle />', () => {
  test('renders', () => {
    const { container } = render(
      <CardTitle className="find" image="">
        I am a very simple card
      </CardTitle>
    );

    expect(container).toMatchSnapshot();
  });

  test('requires an image prop', () => {
    const { getByRole } = render(
      <CardTitle image="url.jpg" reveal>
        I am a very simple card
      </CardTitle>
    );

    expect(getByRole('img').className).toBe('activator');
  });

  test('can have waves', () => {
    const { container } = render(
      <CardTitle image="url.jpg" waves="green">
        I am a very simple card
      </CardTitle>
    );

    expect(container.firstChild.classList.contains('waves-green')).toBeTruthy();
  });
});
