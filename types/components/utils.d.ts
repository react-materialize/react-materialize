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
  children?: React.ReactElement | React.ReactElement[];
}

export type MaterialColor =
  'red' |
  'pink' |
  'purple' |
  'deep-purple' |
  'indigo' |
  'blue' |
  'light-blue' |
  'cyan' |
  'teal' |
  'green' |
  'light-green' |
  'lime' |
  'yellow' |
  'amber' |
  'orange' |
  'deep-orange' |
  'brown' |
  'grey' |
  'blue-grey';
