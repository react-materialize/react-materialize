import { render, screen } from '@testing-library/react';
import Col from '../src/Col';

const renderCol = props =>
  render(<Col {...props} />).container.firstElementChild;

describe('<Col />', () => {
  test('renders a div with the col class and children', () => {
    const { container } = render(
      <Col className="extra">
        <p>hello</p>
      </Col>
    );
    const el = container.firstElementChild;

    expect(el.tagName).toBe('DIV');
    expect(el.className).toBe('col extra');
    expect(screen.getByText('hello').parentElement).toBe(el);
  });

  test('accepts a node prop and passes other props', () => {
    const el = renderCol({ node: 'section', id: 'c1' });

    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveClass('col');
    expect(el).toHaveAttribute('id', 'c1');
  });

  test('accepts sizes as props', () => {
    expect(renderCol({ s: 4, m: 6, l: 8 }).className).toBe('col s4 m6 l8');
  });

  test('accepts xl size', () => {
    expect(renderCol({ s: 12, xl: 3 }).className).toBe('col s12 xl3');
  });

  describe('offset', () => {
    test('renders one offset class', () => {
      expect(renderCol({ offset: 's4' }).className).toBe('col offset-s4');
    });

    test('renders many offset classes', () => {
      expect(renderCol({ offset: 's4 m6 xl8' }).className).toBe(
        'col offset-s4 offset-m6 offset-xl8'
      );
    });
  });

  describe('push', () => {
    test('renders one push class', () => {
      expect(renderCol({ push: 's4' }).className).toBe('col push-s4');
    });

    test('renders many push classes', () => {
      expect(renderCol({ push: 's4 m6 xl8' }).className).toBe(
        'col push-s4 push-m6 push-xl8'
      );
    });
  });

  describe('pull', () => {
    test('renders one pull class', () => {
      expect(renderCol({ pull: 's4' }).className).toBe('col pull-s4');
    });

    test('renders many pull classes', () => {
      expect(renderCol({ pull: 's4 m6 xl8' }).className).toBe(
        'col pull-s4 pull-m6 pull-xl8'
      );
    });
  });

  test('combines sizes, offset, push, pull and className', () => {
    const el = renderCol({
      s: 12,
      m: 6,
      offset: 'm3',
      push: 'l2',
      pull: 'xl1',
      className: 'extra'
    });

    expect(el.className).toBe('col s12 m6 offset-m3 push-l2 pull-xl1 extra');
  });
});
