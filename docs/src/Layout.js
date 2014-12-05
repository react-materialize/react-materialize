var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    MainNav = require('./MainNav'),
    PageFooter = require('./PageFooter');

var Layout = React.createClass({
  render() {
    return (
      <div>
        <MainNav />
        <main role='main'>
          <RouteHandler />
        </main>
        <PageFooter />
      </div>
    );
  }
});

module.exports = Layout;
