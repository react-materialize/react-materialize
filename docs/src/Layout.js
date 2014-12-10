var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    MainNav = require('./MainNav'),
    PageFooter = require('./PageFooter');

var Layout = React.createClass({
  render() {
    return (
      <div>
        <div className='container'>
          <MainNav />
        </div>
        <main role='main' className='container'>
          <RouteHandler />
        </main>
        <div className='container'>
          <PageFooter />
        </div>
      </div>
    );
  }
});

module.exports = Layout;
