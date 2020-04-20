import * as React from "react";
import { AnyFn } from "./utils";

export interface MediaBoxOptions {
  inDuration?: number;
  onCloseEnd?: AnyFn;
  onCloseStart?: AnyFn;
  onOpenEnd?: AnyFn;
  onOpenStart?: AnyFn;
  outDuration?: number;
}

export interface MediaBoxProps {
  id?: string;
  options?: MediaBoxOptions;
  children?: React.ReactNode;
}

/**
 * React Materialize: MediaBox
 */
declare const MediaBox: React.FC<MediaBoxProps>;

export default MediaBox;
