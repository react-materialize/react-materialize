import { render, screen } from '@testing-library/react';
import Parallax from '../src/Parallax';
import mocker from './helper/new-mocker';

describe('<Parallax />', () => {
  const destroyMock = vi.fn();
  const initMock = vi.fn(() => ({ destroy: destroyMock }));
  let restore;
  const image = <img src="image.jpg" alt="background" />;

  beforeEach(() => {
    initMock.mockClear();
    destroyMock.mockClear();
    restore = mocker('Parallax', { init: initMock });
  });

  afterEach(() => {
    restore();
  });

  test('should render a Parallax', () => {
    const { container } = render(
      <Parallax image={image} className="custom" data-testid="parallax" />
    );
    const wrapper = screen.getByTestId('parallax');

    expect(container.firstChild).toBe(wrapper);
    expect(wrapper).toHaveClass('parallax-container', 'custom');

    const img = screen.getByRole('img', { name: 'background' });
    expect(img).toHaveAttribute('src', 'image.jpg');
    expect(img.parentElement).toHaveClass('parallax', { exact: true });
    expect(img.parentElement.parentElement).toBe(wrapper);
  });

  test('can render children element', () => {
    const { container } = render(
      <Parallax image={image}>
        <h1>Test</h1>
      </Parallax>
    );
    const wrapper = container.firstChild;

    expect(wrapper.children).toHaveLength(2);
    expect(wrapper.children[0]).toBe(
      screen.getByRole('heading', { level: 1, name: 'Test' })
    );
    expect(wrapper.children[1]).toHaveClass('parallax');
  });

  test('can render a picture element', () => {
    const { container } = render(
      <Parallax
        image={
          <picture>
            <source srcSet="#webp" type="image/webp" />
            <source srcSet="#jpg" type="image/jpg" />
            <img src="#" alt="picture" />
          </picture>
        }
      />
    );
    const picture = container.querySelector('.parallax > picture');

    expect(picture).toBeInTheDocument();
    expect(picture.querySelectorAll('source')).toHaveLength(2);
    expect(screen.getByRole('img', { name: 'picture' }).parentElement).toBe(
      picture
    );
  });

  describe('initialises', () => {
    test('calls Parallax on the .parallax element', () => {
      const { container } = render(<Parallax image={image} />);

      expect(initMock).toHaveBeenCalledTimes(1);
      expect(initMock.mock.calls[0][0]).toBe(
        container.querySelector('.parallax')
      );
    });

    test('should have default options if none are given', () => {
      render(<Parallax image={image} />);

      expect(initMock).toHaveBeenCalledWith(expect.any(HTMLElement), {
        responsiveThreshold: 0
      });
    });

    test('should call Parallax with the given options', () => {
      const options = { responsiveThreshold: 200 };
      render(<Parallax image={image} options={options} />);

      expect(initMock).toHaveBeenCalledWith(expect.any(HTMLElement), options);
    });

    test('destroys the instance on unmount', () => {
      const { unmount } = render(<Parallax image={image} />);
      expect(destroyMock).not.toHaveBeenCalled();

      unmount();

      expect(destroyMock).toHaveBeenCalledTimes(1);
    });

    test('does not re-initialise when re-rendered with the same props', () => {
      const { rerender } = render(<Parallax image={image} />);
      rerender(<Parallax image={image} />);

      expect(initMock).toHaveBeenCalledTimes(1);
    });
  });
});
