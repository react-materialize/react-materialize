import constants from '../constants';

export function sizesClass(defaults, sizes) {
  return constants.SIZES.reduce((acc, current) => {
    if (typeof sizes[current] !== 'undefined') {
      acc[`${current}${sizes[current]}`] = true;
    }

    return acc;
  }, defaults);
}
