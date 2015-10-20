import React from 'react';

import constants from './constants';
import SlideCaption from './SlideCaption';

class Slide extends React.Component {
    render() {
        let {children, className, placement, src, ...props} = this.props;
        return (
                <li>
                <img src={src} />
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
