import * as React from "react";
import { SharedBasic } from "./utils";

export interface CardProps extends SharedBasic {
  title?: string;
  textClassName?: string;
  reveal?: React.ReactNode;
  header?: React.ReactNode;
  actions?: React.ReactNode[];
  horizontal?: boolean;
  closeIcon?: React.ReactNode;
  revealIcon?: React.ReactNode;
}

/**
 * React Materialize: Card
 */
declare const Card: React.FC<CardProps>;

export default Card;
