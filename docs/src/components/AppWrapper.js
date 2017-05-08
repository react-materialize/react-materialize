import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class AppWrapper extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    return <div>{ this.props.children }</div>;
  }
}

AppWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.any
};

export default withRouter(AppWrapper);
