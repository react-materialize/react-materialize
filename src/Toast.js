import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from './Button';

const Toast = props => {
  const { children, className, options = {} } = props;

  const showToast = () => M.toast(options);

  return (
    <Button onClick={showToast} className={cx('toast', className)}>
      {children}
    </Button>
  );
};

Toast.propTypes = {
  className: PropTypes.string,
  /*
   * Toast trigger content
   */
  children: PropTypes.node,
  /*
   * Options to pass to Toast method
   * <a href="https://materializecss.com/toasts.html">More</a>
   */
  options: PropTypes.shape({
    /*
     * The HTML content of the Toast.
     * @default ''
     */
    html: PropTypes.string,
    /*
     * Length in ms the Toast stays before dismissal.
     * @default 4000
     */
    displayLength: PropTypes.number,
    /*
     * Transition in duration in milliseconds.
     * @default 300
     */
    inDuration: PropTypes.number,
    /*
     * Transition out duration in milliseconds.
     * @default 375
     */
    outDuration: PropTypes.number,
    /*
     * Classes to be added to the toast element.
     * @default ''
     */
    classes: PropTypes.string,
    /*
     * Callback function called when toast is dismissed.
     * @default null
     */
    completeCallback: PropTypes.func,
    /*
     * The percentage of the toast's width it takes for a drag to dismiss a Toast.
     * @default 0.8
     */
    activationPercent: PropTypes.number
  })
};

export default Toast;
