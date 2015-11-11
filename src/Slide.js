import React from 'react';

import SlideCaption from './SlideCaption';

class Slide extends React.Component {
  render() {
    let {children, src, ...props} = this.props;
    return (
      <li>
        <img src={src} {...props}/>
        {children}
      </li>
    );
  }
}

Slide.propTypes = {
  children: React.PropTypes.instanceOf(SlideCaption),
  src: React.PropTypes.string.isRequired,
};

export default Slide;
