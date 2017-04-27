import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';
import Routes from '../routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Routes />
      <PageFooter />
    </div>
  </Router>
);

export default App;
