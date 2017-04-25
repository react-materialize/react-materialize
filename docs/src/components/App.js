import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainNav from './MainNav';
import PageFooter from './PageFooter';
import Routes from '../routes';

const App = () => (
  <Router>
    <div>
      <MainNav location={'some-location'} />
      <Routes />
      <PageFooter />
    </div>
  </Router>
);

export default App;
