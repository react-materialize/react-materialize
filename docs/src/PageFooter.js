var React = require('react');

var PageFooter = React.createClass({
  render() {
    return (
      <footer className='section'>
        <div className='footer-block'>
          <iframe className='github-btn'
            src="http://ghbtns.com/github-btn.html?user=react-materialize&repo=react-materialize&type=watch&count=true"
            allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
        </div>
        <div className='footer-block'>
          <iframe className='github-btn'
            src="http://ghbtns.com/github-btn.html?user=react-materialize&repo=react-materialize&type=fork&count=true"
            allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
        </div>
        <div className='footer-block'>
          <a href='https://github.com/react-materialize/react-materialize'>GitHub</a>
        </div>
        <div className='footer-block'>
          Code licensed under <a href='https://github.com/react-materialize/react-materialize/blob/master/LICENSE'>MIT</a>
        </div>
      </footer>
    );
  }
});

module.exports = PageFooter;
