import * as React from "react";
import { AnyFn, I18nOptions } from "./utils";

export interface DatePickerOptions {
  autoClose?: boolean;
  format?: string;
  parse?: AnyFn;
  defaultDate?: Date;
  setDefaultDate?: boolean;
  disableWeekends?: boolean;
  disableDayFn?: AnyFn;
  firstDay?: number;
  minDate?: Date;
  maxDate?: Date;
  yearRange?: number | number[];
  isRTL?: boolean;
  showMonthAfterYear?: boolean;
  showDaysInNextAndPreviousMonths?: boolean;
  container?: React.ReactNode;
  showClearBtn?: boolean;
  i18n?: I18nOptions;
  events?: string[];
  onSelect?: (date: Date) => any;
  onOpen?: AnyFn;
  onClose?: AnyFn;
  onDraw?: AnyFn;
}

export interface DatePickerProps {
  onChange?: (date: Date) => any;
  id?: string;
  options?: DatePickerOptions;
}

/**
 * React Materialize: DatePicker
 */
declare const DatePicker: React.FC<DatePickerProps>;

export default DatePicker;
