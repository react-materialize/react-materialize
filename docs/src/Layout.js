var React = require('react'),
    Router = require('react-router'),
    MainNav = require('./MainNav'),
    PageFooter = require('./PageFooter');
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({
  render() {
    return (
      <div>
        <MainNav />
        <RouteHandler />
        <PageFooter />
      </div>
    );
  }
});

module.exports = Layout;
