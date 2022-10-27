import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/navbar.scss';
import '../styles/jumbotron.scss';
import '../styles/restaurantHome.scss';
import '../styles/favorite.scss';
import '../styles/footer.scss';
import '../styles/menu.scss';
import '../styles/like.scss';
import '../styles/message.scss';
import '../styles/review.scss';
import '../styles/detailRestaurant.scss';
import '../styles/skeleton.scss';

import './views/components/navbar';
import './views/components/footer';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
