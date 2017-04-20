import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNav from './MainNav';
import PageFooter from './PageFooter';
import Container from './Container';

const App = () => (
  <Router>
    <div>
      <MainNav location={'some-location'} />
      <main>
        <Container />
      </main>
      <PageFooter />
    </div>
  </Router>
);

export default App;
