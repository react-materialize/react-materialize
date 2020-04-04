import * as React from "react";

export interface CarouselOptions {
  duration?: number;
  dist?: number;
  shift?: number;
  padding?: number;
  numVisible?: number;
  fullWidth?: boolean;
  indicators?: boolean;
  noWrap?: boolean;
  onCycleTo?: (currentItem: React.ReactNode) => void;
}

export interface CarouselProps {
  options?: CarouselOptions;
  images?: string[];
  centerImages?: boolean;
  fixedItem?: React.ReactNode;
  className?: string;
  carouselId?: string;
}

/**
 * React Materialize: Carousel
 */
declare const Carousel: React.FC<CarouselProps>;

export default Carousel;
