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
    /**
     * Center align all the text in the table
     * @default false
     */
    centered: React.PropTypes.bool,
    /**
     * Highlight the row that's hovered
     * @default false
     */
    hoverable: React.PropTypes.bool,
    /**
     * Enable response to make the table horizontally scrollable on smaller screens
     * @default false
     */
    responsive: React.PropTypes.bool,
    /**
     * Stripped style
     * @default false
     */
    stripped: React.PropTypes.bool,
    /**
     * Add border to each row
     * @default false
     */
    bordered: React.PropTypes.bool
};

export default Table;
