import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Root from './Root';
import HomePage from './HomePage';
import GettingStartedPage from './GettingStartedPage';
import BadgesPage from './BadgesPage';
import ButtonsPage from './ButtonsPage';
import BreadcrumbsPage from './BreadcrumbsPage';
import CardsPage from './CardsPage';
import ChipsPage from './ChipsPage';
import CollapsiblesPage from './CollapsiblesPage';
import CollectionsPage from './CollectionsPage';
import DropdownPage from './DropdownPage';
import FooterPage from './FooterPage';
import FormsPage from './FormsPage';
import GridPage from './GridPage';
import MediaPage from './MediaPage';
import ModalsPage from './ModalsPage'
import NavbarPage from './NavbarPage';
import PaginationPage from './PaginationPage';
import PreloaderPage from './PreloaderPage';
import SideNavPage from './SideNavPage';
import TablesPage from './TablesPage';
import TabsPage from './TabsPage';

export default
<Route path='/' component={Root}>
  <IndexRoute component={GettingStartedPage} />
  <Route path='index.html' component={HomePage} />
  <Route path='getting-started.html' component={GettingStartedPage} />
  <Route path='badges.html' component={BadgesPage} />
  <Route path='buttons.html' component={ButtonsPage} />
  <Route path='breadcrumbs.html' component={BreadcrumbsPage} />
  <Route path='cards.html' component={CardsPage} />
  <Route path='chips.html' component={ChipsPage} />
  <Route path='collapsible.html' component={CollapsiblesPage} />
  <Route path='collections.html' component={CollectionsPage} />
  <Route path='dropdown.html' component={DropdownPage} />
  <Route path='footer.html' component={FooterPage} />
  <Route path='forms.html' component={FormsPage} />
  <Route path='grid.html' component={GridPage} />
  <Route path='media.html' component={MediaPage} />
  <Route path='modals.html' component={ModalsPage} />
  <Route path='navbar.html' component={NavbarPage} />
  <Route path='pagination.html' component={PaginationPage} />
  <Route path='preloader.html' component={PreloaderPage} />
  <Route path='sidenav.html' component={SideNavPage} />
  <Route path='table.html' component={TablesPage} />
  <Route path='tabs.html' component={TabsPage} />
</Route>;
