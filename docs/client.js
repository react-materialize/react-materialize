import React from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Root from './src/Root';
import routes from './src/Routes';

window.React = React;
Root.propData = window.PROP_DATA;

ReactDOM.render(
    <Router history={createBrowserHistory()} children={routes} />,
    document
);
