import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import idgen from './idgen';

const MediaBox = ({ id, options, children, className, caption, ...props }) => {
  const mediaBoxRef = useRef(null);

  useEffect(() => {
    const instance = M.Materialbox.init(mediaBoxRef.current, options);

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, [id, options, children]);

  return React.cloneElement(children, {
    id: id,
    ref: mediaBoxRef,
    className: cx('materialboxed', className),
    'data-caption': caption,
    ...props
  });
};

MediaBox.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  className: PropTypes.string,
  /**
   * The caption shown below the image when opened
   */
  caption: PropTypes.string,
  options: PropTypes.shape({
    /**
     * Transition in duration in milliseconds.
     */
    inDuration: PropTypes.number,
    /**
     * Transition out duration in milliseconds.
     */
    outDuration: PropTypes.number,
    /**
     * Callback function called before materialbox is opened.
     */
    onOpenStart: PropTypes.func,
    /**
     * Callback function called after materialbox is opened.
     */
    onOpenEnd: PropTypes.func,
    /**
     * Callback function called before materialbox is closed.
     */
    onCloseStart: PropTypes.func,
    /**
     * Callback function called after materialbox is closed.
     */
    onCloseEnd: PropTypes.func
  })
};

MediaBox.defaultProps = {
  get id() {
    return `MediaBox_${idgen()}`;
  },
  options: {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};

export default MediaBox;
