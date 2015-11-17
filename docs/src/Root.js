import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MainNav from './MainNav';
import PageFooter from './PageFooter';

const Root = React.createClass({
  statics: {
    getPages() {
      return [
        'index.html',
        'get-started.html',
        'components.html',
        'breadcrumbs.html',
      ];
    },
    renderToString(props) {
      return '<!doctype html>' +
             ReactDOMServer.renderToString(<Root {...props} />);
    }
  },

  childContextTypes: {
    metadata: React.PropTypes.object
  },

  getChildContext() {
    return {metadata: Root.propData};
  },


  render() {
    let header = {
      __html: '<title>React Materialize</title>' +
              '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
              '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
              '<link href="node_modules/materialize-css/bin/materialize.css" rel="stylesheet" type="text/css" media="screen"/>' +
              '<link href="node_modules/materialize-css/css/ghpages-materialize.css" rel="stylesheet" type="text/css" media="screen"/>' +
              '<link href="assets/docs.css" rel="stylesheet" type="text/css" media="screen"/>' +
              '<link href="node_modules/prismjs/themes/prism.css" rel="stylesheet" type="text/css" media="screen"/>' +
              '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
              '<script src="node_modules/jquery/dist/jquery.js"></script>' +
              '<script src="node_modules/materialize-css/bin/materialize.js"></script>' +
              '<script src="node_modules/prismjs/prism.js"></script>'
    };
    let browserInitScriptObj = {
      __html: `window.PROP_DATA = ${JSON.stringify(Root.propData)};`
    }

    return (
      <html>
        <head dangerouslySetInnerHTML={header} />
        <body>
          <MainNav />
          <main>
            <div className="container" >
              {this.props.children}
            </div>
          </main>
          <PageFooter />
          <script type='text/javascript' dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src="assets/bundle.js" type="text/javascript"/>
        </body>
      </html>
    );
  }
});

export default Root;
