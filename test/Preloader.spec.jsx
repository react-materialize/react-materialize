import React from 'react';
import { render } from '@testing-library/react';
import Preloader from '../src/Preloader';

describe('<Preloader />', () => {
  test('should render a Preloader', () => {
    const { container } = render(
      <Preloader
        className="find"
        size="big"
        active={false}
        color="red"
        flashing
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should render a Preloader with default properties', () => {
    const { container } = render(<Preloader />);

    expect(container).toMatchSnapshot();
  });
});
