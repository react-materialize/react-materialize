import React from 'react';
import { render } from '@testing-library/react';
import Card from '../src/Card';

describe('<Card />', () => {
  test('renders', () => {
    const { container } = render(
      <Card
        title="card title"
        className="blue-grey darken-1"
        textClassName="white-text"
      >
        I am a very simple card
      </Card>
    );

    expect(container).toMatchSnapshot();
  });
});
