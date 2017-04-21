import React from 'react';
import { Route } from 'react-router-dom';

import GridPage from './pages/GridPage';

const Table = () => <h2>Table</h2>;
const cssComponents = {
  // grid: 'Grid',
  table: GridPage
};

const Tabs = () => <h2>Tabs</h2>;
const jsComponents = {
  // collapsible: 'Collapsible',
  // dropdown: 'Dropdown',
  // media: 'Media',
  // modals: 'Modals',
  // sidenav: 'SideNav',
  tabs: Tabs
};

const Preloader = () => <h2>Preloader</h2>;
const components = {
  // badges: 'Badges',
  // buttons: 'Buttons',
  // breadcrumbs: 'Breadcrumbs',
  // cards: 'Cards',
  // chips: 'Chips',
  // collections: 'Collections',
  // footer: 'Footer',
  // forms: 'Forms',
  // navbar: 'Navbar',
  // pagination: 'Pagination',
  preloader: Preloader
};

const parseRoutes = (compObj) => {
  const ret = [];
  Object.keys(compObj).forEach((el) => {
    ret.push({
      path: el,
      component: compObj[el]
    });
  });

  return ret;
};

const routesConfig = [
  { path: 'CSS',
    routes: parseRoutes(cssComponents)
  },
  { path: 'Components',
    routes: parseRoutes(components)
  },
  { path: 'JavaScript',
    routes: parseRoutes(jsComponents)
  }
];

const Routes = () => (
  <div>
    {routesConfig.map((routesSection) => (
      routesSection.routes.map((r) => (
        <Route key={r.path} path={`/${r.path}`} component={r.component} />
      ))
    ))}
  </div>
);

export { routesConfig };
export default Routes;
