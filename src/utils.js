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
 */
export const renderPrefixIcon = icon => {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return React.createElement(
      'i',
      { className: 'material-icons prefix' },
      icon
    );
  }
  return React.cloneElement(icon, {
    className: cx(icon.props.className, 'prefix')
  });
};
