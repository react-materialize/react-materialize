import cx from 'classnames';
import React from 'react';

export const safeJSONStringify = s => {
  try {
    return JSON.stringify(s);
  } catch (err) {
    console.error(err);
    return NaN;
  }
};

/**
 * Render an `icon` prop as a Materialize prefix icon: a string is the icon
 * name, an element keeps its own className and gets `prefix` added.
 * `className` is appended to the icon's classes in both cases.
 */
export const renderPrefixIcon = (icon, className) => {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return React.createElement(
      'i',
      { className: cx('material-icons prefix', className) },
      icon
    );
  }
  return React.cloneElement(icon, {
    className: cx(icon.props.className, 'prefix', className)
  });
};
