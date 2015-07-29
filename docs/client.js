/** globals: window, document */
'use strict';

var React = require('react'),
    Router = require('react-router'),
    Layout = require('./src/Layout'),
    HomePage = require('./src/HomePage'),
    GettingStartedPage = require('./src/GettingStartedPage'),
    ComponentsPage = require('./src/ComponentsPage');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

window.React = React;

var routes = (
  <Route path='/' handler={Layout}>
    <DefaultRoute handler={GettingStartedPage} />
    <Route path='/index.html' handler={HomePage} name='home' />
    <Route path='/get-started.html' handler={GettingStartedPage} name='gs' />
    <Route path='/components.html' handler={ComponentsPage} name='comp' />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});
