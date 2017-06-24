import React from 'react';
import { Route } from 'react-router-dom';

import routesConfig from '../routes';

const renderRoute = (route) => <Route key={route.path} {...route} />;

const Main = () => (
  <main>
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container'>
        <h1 className='header center-on-small-only'>
          React Materialize
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
