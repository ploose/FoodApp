import HomeScreen from '../home/HomeViewContainer';
import HistoryScreen from '../history/HistoryViewContainer';
import StatisticsScreen from '../statistics/StatisticsViewContainer';
import ProfileScreen from '../profile/ProfileViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconHistory = require('../../../assets/images/tabbar/history.png');
const iconStatistics = require('../../../assets/images/tabbar/statistics.png');
const iconProfile = require('../../../assets/images/tabbar/profile.png');

const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: 'Verlauf',
    component: HistoryScreen,
    icon: iconHistory,
  },
  {
    name: 'Statistik',
    component: StatisticsScreen,
    icon: iconStatistics,
  },
  {
    name: 'Profil',
    component: ProfileScreen,
    icon: iconProfile,
  },
];

export default tabNavigationData;