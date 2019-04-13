import { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from './idgen';

class MediaBox extends Component {
  constructor(props) {
    super(props);

    this.id = props.id || `mediabox${idgen()}`;
  }

  componentDidMount() {
    if (typeof M !== 'undefined') {
      const { options } = this.props;

      this.instance = M.Materialbox.init(
        document.getElementById(this.id),
        options
      );
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const { image, className, caption, ...props } = this.props;

    delete props.options;

    return cloneElement(image, {
      id: this.id,
      className: cx('materialboxed', className),
      'data-caption': caption,
      ...props
    });
  }
}

MediaBox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  /**
   * The caption shown below the image when opened
   */
  caption: PropTypes.string,
  /**
   * The image
   */
  image: PropTypes.node.isRequired,
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
