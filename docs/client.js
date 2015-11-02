/** globals: window, document */
'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Root from './src/Root';
import Layout from './src/Layout';
import HomePage from './src/HomePage';
import GettingStartedPage from './src/GettingStartedPage';
import ComponentsPage from './src/ComponentsPage';

window.React = React;
Root.propData = window.PROP_DATA;

ReactDOM.render((
    <Router history={createBrowserHistory()}>
        <Route path='/' component={Layout}>
            <IndexRoute component={GettingStartedPage} />
            <Route path='index.html' component={HomePage} name='home' />
            <Route path='get-started.html' component={GettingStartedPage} name='gs' />
            <Route path='components.html' component={ComponentsPage} name='comp' />
        </Route>
    </Router>
), document.getElementById("app"));
