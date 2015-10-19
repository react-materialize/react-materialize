import React from 'react';
import cx from 'classnames';

import constants from './constants';

class CardTitle extends React.Component {
    render() {
        var {image, reveal, waves, children, ...props} = this.props;
        var classes = {
            'card-image': true,
        };
        if (waves) {
            classes['waves-effect'] = true,
            classes['waves-' + waves] = true,
            classes['waves-block'] = true
        }
        var imgClasses = {'activator': reveal};
        var titleClasses = {
            'card-title': true
        }
        return (
            <div className={cx(classes)} {...props}>
                <img className={cx(imgClasses)} src={image} />
                <span class={cx(titleClasses)}>{children}</span>
            </div>
        );
    }
}

CardTitle.propTypes = {
    // Whether the image serves as activator for the reveal
    reveal: React.PropTypes.bool,
    // the waves effect
    waves: React.PropTypes.oneOf(constants.WAVES),
    // The path to the image
    image: React.PropTypes.string.isRequired
}

export default CardTitle;
