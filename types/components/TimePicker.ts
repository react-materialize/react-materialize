import * as React from "react";
import { AnyFn, I18nOptions } from "./utils";

export interface TimePickerOptions {
  duration?: number;
  container?: string;
  showClearBtn?: boolean;
  defaultTime?: string;
  fromNow?: number;
  i18n?: I18nOptions;
  autoClose?: boolean;
  twelveHour?: boolean;
  vibrate?: boolean;
  onOpenStart?: AnyFn;
  onOpenEnd?: AnyFn;
  onCloseStart?: AnyFn;
  onCloseEnd?: AnyFn;
  onSelect?: AnyFn;
}

export interface TimePickerProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  options?: TimePickerOptions;
}

/**
 * React Materialize: TimePicker
 */
declare const TimePicker: React.FC<TimePickerProps>;

export default TimePicker;
