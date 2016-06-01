
import home from './home';
import about from './about';
import error from './error';
import widget from './widget';

const routes = {

  path: '/',

  children: [
    home,
    about,
    widget,
    error,
  ],

};

export default routes;
