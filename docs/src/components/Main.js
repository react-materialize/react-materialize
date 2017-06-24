import React from 'react';
import { Route } from 'react-router-dom';

import routesConfig from '../routes';

const renderRoute = (route) => <Route key={route.path} {...route} />;
const getPageTitle = () => window.location.hash.substring(2) || 'React Materialize';
const capitalize = path => path[0] ? path[0].toUpperCase() + path.substr(1) : '';
const renderPageTitle = () => capitalize(getPageTitle());

const Main = () => (
  <main>
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container'>
        <h1 className='header center-on-small-only'>
          { renderPageTitle() }
        </h1>
      </div>
    </div>
    <div className='container'>
      {routesConfig.map((routesSection) => {
        return routesSection.component
          ? renderRoute(routesSection)
          : routesSection.routes.map(renderRoute);
      })}
    </div>
  </main>
);

export default Main;
