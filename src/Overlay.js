import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Overlay extends Component {
  componentWillUnmount () {
    try {
      this._unrenderOverlay();
    } catch (e) {
      this._overlayInstance = null;
    }
    if (this._overlayTarget) {
      this.getContainerDOMNode().removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
  }

  componentDidUpdate () {
    this._renderOverlay();
  }

  componentDidMount () {
    this._renderOverlay();
  }

  _mountOverlayTarget () {
    this._overlayTarget = document.createElement('div');
    this.getContainerDOMNode()
      .appendChild(this._overlayTarget);
  }

  _renderOverlay () {
    if (!this._overlayTarget) {
      this._mountOverlayTarget();
    }

    // Save reference to help testing
    this._overlayInstance =
      ReactDOM.unstable_renderSubtreeIntoContainer(this,
        this.renderOverlay(), this._overlayTarget
      );
  }

  _unrenderOverlay () {
    React.unmountComponentAtNode(this._overlayTarget);
    this._overlayInstance = null;
  }

  getOverlayDOMNode () {
    if (!this.isMounted()) {
      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
    }

    return this._overlayInstance.getDOMNode();
  }

  getContainerDOMNode () {
    return this.props.container.getDOMNode
      ? this.props.container.getDOMNode()
      : this.props.container;
  }
}

Overlay.propTypes = {
  container: PropTypes.any.isRequired
};

Overlay.defaultProps = {
  container: {
    // Provide `getDOMNode` fn mocking a React component API. The `document.body`
    // reference needs to be contained within this function so that it is not accessed
    // in environments where it would not be defined, e.g. nodejs. Equally this is needed
    // before the body is defined where `document.body === null`, this ensures
    // `document.body` is only accessed after componentDidMount.
    getDOMNode: function getDOMNode () {
      return document.body;
    }
  }
};

export default Overlay;
