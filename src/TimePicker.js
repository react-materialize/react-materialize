import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import idgen from './idgen';

const TimePicker = ({ onChange, options, ...props }) => {
  const timeEl = useRef(null);

  useEffect(() => {
    const _options = onChange ? { ...options, onSelect: onChange } : options;
    const instance = M.Timepicker.init(timeEl.current, _options);

    return () => {
      instance && instance.destroy();
    };
  }, [options, onChange]);

  return <TextInput ref={timeEl} inputClassName="timepicker" {...props} />;
};

TimePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: PropTypes.func,
  /**
   * id passed to Timepicker, also used for init method
   * @default idgen()
   */
  id: PropTypes.string,
  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#time-picker
   */
  options: PropTypes.shape({
    /**
     * Duration of the transition from/to the hours/minutes view.
     * @default 350
     */
    duration: PropTypes.number,
    /**
     * Specify a selector for a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: PropTypes.string,
    /**
     * Show the clear button in the Timepicker.
     * @default false
     */
    showClearBtn: PropTypes.bool,
    /**
     * Default time to set on the timepicker 'now' or '13:14'
     * @default 'now'
     */
    defaultTime: PropTypes.string,
    /**
     * Millisecond offset from the defaultTime.
     * @default 0
     */
    fromNow: PropTypes.number,
    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: PropTypes.shape({
      cancel: PropTypes.string,
      clear: PropTypes.string,
      done: PropTypes.string
    }),
    /**
     * Automatically close picker when minute is selected.
     * @default false
     */
    autoClose: PropTypes.bool,
    /**
     * Use 12 hour AM/PM clock instead of 24 hour clock.
     * @default true
     */
    twelveHour: PropTypes.bool,
    /**
     * Vibrate device when dragging clock hand.
     * @default true
     */
    vibrate: PropTypes.bool,
    /**
     * Callback function called before modal is opened.
     * @default null
     */
    onOpenStart: PropTypes.func,
    /**
     * Callback function called after modal is opened.
     * @default null
     */
    onOpenEnd: PropTypes.func,
    /**
     * Callback function called before modal is closed.
     * @default null
     */
    onCloseStart: PropTypes.func,
    /**
     * Callback function called after modal is closed.
     * @default null
     */
    onCloseEnd: PropTypes.func,
    /**
     * Callback function when a time is selected, first parameter is the hour and the second is the minute.
     * @default null
     */
    onSelect: PropTypes.func
  })
};

TimePicker.defaultProps = {
  id: `TimePicker-${idgen()}`,
  options: {
    duration: 350,
    container: null,
    showClearBtn: false,
    defaultTime: 'now',
    fromNow: 0,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok'
    },
    autoClose: false,
    twelveHour: true,
    vibrate: true,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  }
};

export default TimePicker;
