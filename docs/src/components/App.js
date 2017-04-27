import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';
import Main from './Main';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Main />
      <Footer />
    </div>
  </Router>
);

export default App;
