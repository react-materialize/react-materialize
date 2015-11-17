import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Root from './Root';
import HomePage from './HomePage';
import GettingStartedPage from './GettingStartedPage';
import Breadcrumbs from './Breadcrumbs';

export default
<Route path='/' component={Root}>
  <IndexRoute component={GettingStartedPage} />
  <Route path='index.html' component={HomePage} />
  <Route path='get-started.html' component={GettingStartedPage} />
  <Route path='breadcrumbs.html' component={Breadcrumbs} />
</Route>;
