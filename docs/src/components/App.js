import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';
import Main from './Main';
import AppWrapper from './AppWrapper';

const App = () => (
  <Router>
    <AppWrapper>
      <Navigation />
      <Main />
      <Footer />
    </AppWrapper>
  </Router>
);

export default App;
