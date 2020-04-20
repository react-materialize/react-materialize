import * as React from "react";
import { MaterialColor } from "./utils";

export interface CardTitleProps {
  children?: React.ReactNode;
  reveal?: boolean;
  waves?: MaterialColor;
  image: string;
}

/**
 * React Materialize: CardTitle
 */
declare const CardTitle: React.FC<CardTitleProps>;

export default CardTitle;
