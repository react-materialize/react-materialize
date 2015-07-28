import React from 'react';

export default class Overlay extends React.Component {
  static propTypes = {
    container: React.PropTypes.any.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this._unrenderOverlay();
    if (this._overlayTarget) {
      this.getContainerDOMNode()
        .removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
  }

  componentDidUpdate() {
    this._renderOverlay();
  }

  componentDidMount() {
    this._renderOverlay();
  }

  _mountOverlayTarget() {
    this._overlayTarget = document.createElement('div');
    this.getContainerDOMNode()
      .appendChild(this._overlayTarget);
  }

  _renderOverlay() {
    if (!this._overlayTarget) {
      this._mountOverlayTarget();
    }

    // Save reference to help testing
    this._overlayInstance = React.render(this.renderOverlay(), this._overlayTarget);
  }

  _unrenderOverlay() {
    React.unmountComponentAtNode(this._overlayTarget);
    this._overlayInstance = null;
  }

  getOverlayDOMNode() {
    if (!this.isMounted()) {
      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
    }

    return this._overlayInstance.getDOMNode();
  }

  getContainerDOMNode() {
    return this.props.container.getDOMNode ?
      this.props.container.getDOMNode() : this.props.container;
  }
}
