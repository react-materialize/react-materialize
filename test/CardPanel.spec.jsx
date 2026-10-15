import React from 'react';
import { render } from '@testing-library/react';
import CardPanel from '../src/CardPanel';

describe('<CardPanel />', () => {
  test('renders', () => {
    const { container } = render(
      <CardPanel className="blue-grey">I am a very simple card</CardPanel>
    );

    expect(container).toMatchSnapshot();
  });
});
