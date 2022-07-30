import HomeScreen from '../home/HomeView';
import HistoryScreen from '../history/HistoryView';
import StatisticsScreen from '../statistics/StatisticsView';
import ProfileScreen from '../profile/ProfileView';

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
