import React from 'react';
import cx from 'classnames';

class Table extends React.Component {
    render() {
        let classes = {
            centered: this.props.centered,
            highlight: this.props.hoverable,
            'responsive-table': this.props.responsive,
            stripped: this.props.stripped,
            bordered: this.props.bordered
        };

        let {className, children, ...props} = this.props;

        return (
            <table className={cx(classes, className)} {...this.props}>
                {children}
            </table>
        );
    }
}

Table.propTypes = {
    centered: React.PropTypes.bool,
    hoverable: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    stripped: React.PropTypes.bool,
    bordered: React.PropTypes.bool
};

export default Table;
