import React from 'react';
import { Route } from 'react-router-dom';

import GettingStartedPage from './pages/GettingStartedPage';
// css components
// import TablesPage from './pages/TablesPage';

// js components
// import CollapsiblePage from './pages/CollapsiblePage';
// import DropdownPage from './pages/DropdownPage';
// import MediaPage from './pages/MediaPage';
// import ModalsPage from './pages/ModalsPage';
// import SideNavPage from './pages/SideNavPage';
// import TabsPage from './pages/TabsPage';

// components
// import BadgesPage from './pages/BadgesPage';
// import ButtonsPage from './pages/ButtonsPage';
// import BreadcrumbsPage from './pages/BreadcrumbsPage';
// import CardsPage from './pages/CardsPage';
// import ChipsPage from './pages/ChipsPage';
// import CollectionsPage from './pages/CollectionsPage';
// import FooterPage from './pages/FooterPage';
// import FormsPage from './pages/FormsPage';
// import NavbarPage from './pages/NavbarPage';
// import PaginationPage from './pages/PaginationPage';
// import PreloaderPage from './pages/PreloaderPage';
import Grid from './pages/GridPage';

const cssComponents = {
  grid: Grid,
  // table: TablesPage
};

const jsComponents = {
  // collapsible: CollapsiblePage,
  // dropdown: DropdownPage,
  // media: MediaPage,
  // modals: ModalsPage,
  // sidenav: SideNavPage,
  // tabs: TabsPage
};

const components = {
  // badges: BadgesPage,
  // buttons: ButtonsPage,
  // breadcrumbs: BreadcrumbsPage,
  // cards: CardsPage,
  // chips: ChipsPage,
  // collections: CollectionsPage,
  // footer: FooterPage,
  // forms: FormsPage,
  // navbar: NavbarPage,
  // pagination: PaginationPage,
  // preloader: PreloaderPage
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
  <main>
    <div className='container'>
      <Route exact path='/' component={GettingStartedPage} />
      {routesConfig.map((routesSection) => (
        routesSection.routes.map((r) => (
          <Route key={r.path} path={`/${r.path}`} component={r.component} />
        ))
      ))}
    </div>
  </main>
);

export { routesConfig };
export default Routes;
