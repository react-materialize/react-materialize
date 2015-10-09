import React from 'react';
import constants from './constants';
import cx from 'classnames';

class Icon extends React.Component {
    render() {
        var classes = {
            "material-icons": true
        };
        constants.PLACEMENTS.forEach(p => {
            classes[p] = this.props[p];
        });

        constants.ICON_SIZES.forEach(s => {
            classes[s] = this.props[s];
        });
        return <i className={cx(classes)}>{this.props.children}</i>;
    }
}

Icon.propTypes = {
    tiny: React.PropTypes.bool,
    small: React.PropTypes.bool,
    medium: React.PropTypes.bool,
    large: React.PropTypes.bool
}

export default Icon;
