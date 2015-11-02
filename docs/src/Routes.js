import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Root from './Root';
import HomePage from './HomePage';
import GettingStartedPage from './GettingStartedPage';
import ComponentsPage from './ComponentsPage';


export default (
    <Route path='/' component={Root}>
        <IndexRoute component={GettingStartedPage} />
        <Route path='index.html' component={HomePage} name='home' />
        <Route path='get-started.html' component={GettingStartedPage} name='gs' />
        <Route path='components.html' component={ComponentsPage} name='comp' />
    </Route>
);
