import GettingStartedPage from './pages/GettingStartedPage';
// css components
import TablesPage from './pages/TablesPage';
import Grid from './pages/GridPage';

// js components
import CarouselPage from './pages/CarouselPage';
import CollapsiblePage from './pages/CollapsiblesPage';
import DropdownPage from './pages/DropdownPage';
import MediaPage from './pages/MediaPage';
import ModalsPage from './pages/ModalsPage';
import ParallaxPage from './pages/ParallaxPage';
import SideNavPage from './pages/SideNavPage';
import TabsPage from './pages/TabsPage';
import ToastPage from './pages/ToastPage';

// components
import BadgesPage from './pages/BadgesPage';
import ButtonsPage from './pages/ButtonsPage';
import BreadcrumbsPage from './pages/BreadcrumbsPage';
import CardsPage from './pages/CardsPage';
import ChipsPage from './pages/ChipsPage';
import CollectionsPage from './pages/CollectionsPage';
import FooterPage from './pages/FooterPage';
import FormsPage from './pages/FormsPage';
import IconsPage from './pages/IconsPage';
import NavbarPage from './pages/NavbarPage';
import PaginationPage from './pages/PaginationPage';
import PreloaderPage from './pages/PreloaderPage';

const cssComponents = {
  grid: Grid,
  table: TablesPage
};

const jsComponents = {
  carousel: CarouselPage,
  collapsible: CollapsiblePage,
  dropdown: DropdownPage,
  media: MediaPage,
  modals: ModalsPage,
  parallax: ParallaxPage,
  sidenav: SideNavPage,
  tabs: TabsPage,
  toast: ToastPage
};

const components = {
  badges: BadgesPage,
  buttons: ButtonsPage,
  breadcrumbs: BreadcrumbsPage,
  cards: CardsPage,
  chips: ChipsPage,
  collections: CollectionsPage,
  footer: FooterPage,
  forms: FormsPage,
  icon: IconsPage,
  navbar: NavbarPage,
  pagination: PaginationPage,
  preloader: PreloaderPage
};

const parseRoutes = (compObj) => {
  const ret = [];
  Object.keys(compObj).forEach((el) => {
    ret.push({
      path: `/${el}`,
      component: compObj[el]
    });
  });

  return ret;
};

export default [
  { path: '/',
    exact: true,
    component: GettingStartedPage
  },
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
