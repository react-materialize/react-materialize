import React from 'react';
import cx from 'classnames';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.renderTitle = this.renderTitle.bind(this);
    }
    render() {
        var {title, header, className, textClassName, actions, children, ...props} = this.props;
        var classes = { card: true };
        return (
            <div {...props}
                className={cx(className, classes)} >
                {header}
                <div className={cx('card-content', textClassName)}>
                    {title ? this.renderTitle(title) : null}
                    <p>{children}</p>
                </div>
                <div className='card-action'>
                {actions}
                </div>
            </div>
        );
    }

    renderTitle(title) {
        return <span className='card-title'>{title}</span>;
    }
}

Card.propTypes = {
    title: React.PropTypes.string.isRequired,
    textClassName: React.PropTypes.string
}

export default Card;
