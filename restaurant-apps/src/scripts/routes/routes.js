import Restaurant from '../views/pages/restaurant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurant, // default page
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
