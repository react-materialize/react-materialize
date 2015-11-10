import React from 'react';

class Badge extends React.Component {
  render() {
    let classes = ['badge'];
    if (this.props.text) {
      classes.push(this.props.text);
      classes = classes.reverse();
    }

    return (
      <span className={classes.join(' ')}>
        {this.props.children}
      </span>
    );
  }
}

Badge.propTypes = {
  text: React.PropTypes.string
};

export default Badge;
