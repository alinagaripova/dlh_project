import About from '../components/About';
import Team from '../components/Team';
import Cases from '../components/Cases';
import Platform from '../components/Platform';

const routes = [
  {
    path: '/',
    component: About,
    exact: true,
    type: 'public',
  },
  {
    path: '/platform',
    component: Platform,
    exact: true,
    type: 'public',
  },
  {
    path: '/teams',
    component: Team,
    exact: true,
    type: 'public',
  },
  {
    path: '/cases',
    component: Cases,
    exact: true,
    type: 'public',
  },
];

export default routes;