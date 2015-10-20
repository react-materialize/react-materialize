import React from 'react';
import Slide from './Slide';

class Slider extends React.Component {
    constructor() {
        super()
        this.state = {};
    }

    componentDidMount() {
        $(".slider").slider({indicators: this.props.indicators, interval: this.props.interval});
    }

    render() {
        let {fullscreen, children, ...props} = this.props;
        return (
                <div className="slider">
                <ul className="slides">
                {children}
                </ul>
                </div>
        );
    }
}

Slider.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Slide)),
    fullscreen: React.PropTypes.bool,
    indicators: React.PropTypes.bool,
    interval: React.PropTypes.number,
};

Slider.defaultProps = {
    fullscreen: false,
    indicators: true,
    interval: 6000,
};

export default Slider;
