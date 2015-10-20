import React from 'react';
import cx from 'classnames';
import constants from './constants';

class SlideCaption extends React.Component {
    render() {
        let {title, className, placement, ...props} = this.props;
        let classes = {
            caption: true,
        }

        classes[placement + '-align'] = true;

        return (
            <div className={cx(classes, className)} {...props}>
                <h3>{title}</h3>
                <h5 className="light grey-text text-lighten-3">{this.props.children}</h5>
            </div>
        );
    }
}

SlideCaption.propTypes = {
    children: React.PropTypes.string,
    placement: React.PropTypes.oneOf(constants.PLACEMENTS),
    title: React.PropTypes.string.isRequired,
};

SlideCaption.defaultProps = {
    placement: 'center'
};

export default SlideCaption;
