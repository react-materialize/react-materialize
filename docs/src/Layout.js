import {Router} from 'react-router';

var React = require('react'),
    MainNav = require('./MainNav'),
    PageFooter = require('./PageFooter');

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        {this.props.children || "hello world"}
        <PageFooter />
      </div>
    );
  }
}
