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
import CollectionsPage from './CollectionsPage';
import FooterPage from './FooterPage';
import FormsPage from './FormsPage';
import GridPage from './GridPage';
import NavbarPage from './NavbarPage';
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
  <Route path='collections.html' component={CollectionsPage} />
  <Route path='footer.html' component={FooterPage} />
  <Route path='forms.html' component={FormsPage} />
  <Route path='grid.html' component={GridPage} />
  <Route path='navbar.html' component={NavbarPage} />
  <Route path='table.html' component={TablesPage} />
  <Route path='tabs.html' component={TabsPage} />
</Route>;
