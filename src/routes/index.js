import About from '../components/About';

const routes = [
  {
    path: '/',
    component: About,
    exact: true,
    type: 'public',
  },
  {
    path: '/platform',
    component: <></>,
    exact: true,
    type: 'public',
  },
  {
    path: '/teams',
    component: <></>,
    exact: true,
    type: 'public',
  },
  {
    path: '/cases',
    component: <></>,
    exact: true,
    type: 'public',
  },
];

export default routes;