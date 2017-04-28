require('react-hot-loader/patch');

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/css/prism.css';
import 'materialize-css/css/ghpages-materialize.css';
import '../assets/stylesheets/main.css';
import App from './components/App';

const target = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, target
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
