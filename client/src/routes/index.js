import { TrendingUp, Web, FitnessCenter, AccountBox } from '@material-ui/icons';

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import Workout from '../pages/workout/Workout';
import Progress from '../pages/progress/Progress';
import Account from '../pages/account/Account';

export const userRoutes = [
  {
    href: '/uebersicht',
    component: Home,
    title: 'Übersicht',
    icon: Web,
  },
  {
    href: '/entwicklung',
    component: Progress,
    title: 'Progression',
    icon: TrendingUp,
  },
  {
    href: '/workout',
    component: Workout,
    title: 'Workout',
    icon: FitnessCenter,
  },
  {
    href: '/account',
    component: Account,
    title: 'Account',
    icon: AccountBox,
  },
];

export const loginRegisterRoutes = [
  {
    href: '/login',
    component: Login,
  },
  {
    href: '/register',
    component: Register,
  },
];
