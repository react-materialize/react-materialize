import React from 'react';
import cx from 'classnames';

class CardTitle extends React.Component {
    render() {
        var {image, children, ...props} = this.props;
        return (
            <div className='card-image' {...props}>
                <img src={image} />
                <span className='card-title'>{children}</span>
            </div>
        );
    }
}

CardTitle.propTypes = {
    image: React.PropTypes.string.isRequired
}

export default CardTitle;
