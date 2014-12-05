/** globals: window, document */
'use strict';

var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    Root = require('./src/Root'),
    Layout = require('./src/Layout'),
    HomePage = require('./src/HomePage'),
    GettingStartedPage = require('./src/GettingStartedPage'),
    ComponentsPage = require('./src/ComponentsPage');

window.React = React;

var routes = (
  <Route path='/' handler={Layout}>
    <DefaultRoute handler={HomePage} />
    <Route path='/index.html' handler={HomePage} name='home' />
    <Route path='/get-started.html' handler={GettingStartedPage} name='gs' />
    <Route path='/components.html' handler={ComponentsPage} name='comp' />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
