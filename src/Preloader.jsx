import PropTypes from 'prop-types';
import cx from 'classnames';

import Spinner from './Spinner';

const colors = ['blue', 'red', 'yellow', 'green'];

const Preloader = ({
  active = true,
  size,
  color = 'blue',
  flashing = false,
  className
}) => {
  const classes = cx('preloader-wrapper', { active }, size);

  let spinners;
  if (flashing) {
    spinners = colors.map(color => (
      <Spinner color={color} only={false} key={color} />
    ));
  } else {
    spinners = <Spinner color={color} />;
  }
  return <div className={cx(className, classes)}>{spinners}</div>;
};

Preloader.propTypes = {
  className: PropTypes.string,
  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: PropTypes.oneOf(['big', 'small', 'medium']),
  /**
   * Whether to spin
   * @default true
   */
  active: PropTypes.bool,
  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'green']),
  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: PropTypes.bool
};

export default Preloader;
