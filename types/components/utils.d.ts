export interface Responsive {
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
  offset?: string;
}

export type AnyFn = (...args: any[]) => any;

export interface SharedBasic {
  className?: string;
  children?: React.ReactElement;
}
