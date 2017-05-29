
export default function cleanProps(props) {
  for (let i = 0, len = PROPS_FILTER.length; i < len; ++i) {
    let prop = PROPS_FILTER[i];
    if (prop in props) {
      delete props[prop];
    }
  }
  return props;
}


const PROPS_FILTER = [
  'flat',
  'floating',
  'large',
  'node',
];
