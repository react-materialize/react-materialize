import React from 'react';
import MainNav from './MainNav';
import PageFooter from './PageFooter';

const Root = React.createClass({
  statics: {
    getPages() {
      return [
        'index.html',
        'getting-started.html',
        'badges.html',
        'buttons.html',
        'breadcrumbs.html',
        'cards.html',
        'chips.html',
        'collapsible.html',
        'collections.html',
        'dropdown.html',
        'footer.html',
        'forms.html',
        'grid.html',
        'media.html',
        'modals.html',
        'navbar.html',
        'pagination.html',
        'preloader.html',
        'table.html',
        'tabs.html',
      ];
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
      __html: `<title>React Materialize</title>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link href="node_modules/materialize-css/bin/materialize.css" rel="stylesheet" type="text/css" media="screen"/>
              <link href="node_modules/materialize-css/css/ghpages-materialize.css" rel="stylesheet" type="text/css" media="screen"/>
              <link href="node_modules/prismjs/themes/prism.css" rel="stylesheet" type="text/css" media="screen"/>
              <link href="assets/main.css" rel="stylesheet" type="text/css" media="screen"/>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
    };

    let browserInitScriptObj = {
      __html: `window.PROP_DATA = ${JSON.stringify(Root.propData)};`
    };

    return (
      <html>
        <head dangerouslySetInnerHTML={header} />
        <body>
          <MainNav location={this.props.location.pathname}/>
          <main>
            <div className="container" >
              {this.props.children}
            </div>
          </main>
          <PageFooter />
          <script src="node_modules/jquery/dist/jquery.js"></script>
          <script src="node_modules/materialize-css/bin/materialize.js"></script>
          <script src="node_modules/prismjs/prism.js"></script>
          <script type='text/javascript' dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src="assets/bundle.js" type="text/javascript"/>
        </body>
      </html>
    );
  }
});

export default Root;
