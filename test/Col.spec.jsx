import React from 'react';
import { render } from '@testing-library/react';
import Col from '../src/Col';

describe('<Col />', () => {
  test('renders', () => {
    const { container } = render(
      <Col>
        <p>hello</p>
      </Col>
    );
    expect(container).toMatchSnapshot();
  });

  test('accepts sizes as props', () => {
    const { container } = render(<Col s={4} m={6} l={8} />);
    expect(container).toMatchSnapshot();
  });

  describe('offset', () => {
    test('renders one offset class', () => {
      const { container } = render(<Col offset="s4" />);
      expect(container).toMatchSnapshot();
    });

    test('renders many offset classes', () => {
      const { container } = render(<Col offset="s4 m6 xl8" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('push', () => {
    test('renders one push class', () => {
      const { container } = render(<Col push="s4" />);
      expect(container).toMatchSnapshot();
    });

    test('renders many push classes', () => {
      const { container } = render(<Col push="s4 m6 xl8" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('pull', () => {
    test('renders one pull class', () => {
      const { container } = render(<Col pull="s4" />);
      expect(container).toMatchSnapshot();
    });

    test('renders many pull classes', () => {
      const { container } = render(<Col pull="s4 m6 xl8" />);
      expect(container).toMatchSnapshot();
    });
  });
});
