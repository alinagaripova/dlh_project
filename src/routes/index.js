import About from '../components/About';
import Team from '../components/Team';
import Cases from '../components/Cases';
import Case from '../components/Cases/Case';
import Platform from '../components/Platform';
import PrivacyPolicyPage from '../components/PrivacyPolicy';

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
  {
    path: '/cases/:caseId',
    component: Case,
    exact: true,
    type: 'public',
  },
  {
    path: '/privacy',
    component: PrivacyPolicyPage,
    exact: true,
    type: 'public',
  },
];

export default routes;