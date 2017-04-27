import React from 'react';
import { Route } from 'react-router-dom';

import routesConfig from '../routes';

const renderRoute = (route) => {
  const { path, component, exact = false } = route;
  return <Route key={path} exact={exact} path={path} component={component} />;
};

const Main = () => (
  <main>
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
