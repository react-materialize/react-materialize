import {Router} from 'react-router';

import React from 'react';
import MainNav from './MainNav';
import PageFooter from './PageFooter';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        {this.props.children}
        <PageFooter />
      </div>
    );
  }
}

export default Layout;
