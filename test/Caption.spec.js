import React from 'react';
import { render } from '@testing-library/react';
import Caption from '../src/Caption';

describe('<Caption />', () => {
  test('renders', () => {
    const { container } = render(
      <Caption placement="left">
        <h3>This is our big Tagline!</h3>
        <h5 className="light grey-text text-lighten-3">
          Here's our small slogan.
        </h5>
      </Caption>
    );

    expect(container).toMatchSnapshot();
  });
});
