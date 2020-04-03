import * as React from "react";
import { AnyFn, SharedBasic } from "./utils";

export interface ToastOptions {
  html?: string;
  displayLength?: number;
  inDuration?: number;
  outDuration?: number;
  classes?: string;
  completeCallback?: AnyFn;
  activationPercent?: number;
}

export interface ToastProps extends SharedBasic {
  options?: ToastOptions;
}

/**
 * React Materialize: Toast
 */
declare const Toast: React.FC<ToastProps>;

export default Toast;
