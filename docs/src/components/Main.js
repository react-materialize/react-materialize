import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routesConfig from '../routes';

const renderRoute = (route) => (
  <Route key={route.path} {...route} />
);

const Main = () => (
  <main>
    <div className='container'>
      {routesConfig.map((routesSection) => {
        return routesSection.component
          ? renderRoute(routesSection)
          : routesSection.routes.map(renderRoute);
      })}
      <Redirect to='/' />
    </div>
  </main>
);

export default Main;
