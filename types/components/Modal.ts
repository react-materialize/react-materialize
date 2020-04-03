import * as React from "react";
import { AnyFn } from "./utils";

export interface ModalOptions {
  dismissible?: boolean;
  endingTop?: string;
  inDuration?: number;
  onCloseEnd?: AnyFn;
  onCloseStart?: AnyFn;
  onOpenEnd?: AnyFn;
  onOpenStart?: AnyFn;
  opacity?: number;
  outDuration?: number;
  preventScrolling?: boolean;
  startingTop?: string;
}

export interface ModalProps {
  options?: ModalOptions;
  actions?: React.ReactNode[];
  bottomSheet?: boolean;
  fixedFooter?: boolean;
  header?: string;
  id?: string;
  open?: boolean;
  root?: HTMLElement | null;
  trigger?: React.ReactNode;
}

/**
 * React Materialize: Modal
 */
declare const Modal: React.FC<ModalProps>;

export default Modal;
