import StartScreen from '../login/startScreen/StartScreenView';
import LoginScreen from '../login/loginScreen/LoginScreenView';
import RegisterScreen from '../login/registerScreen/RegisterScreenView';
import ResetPasswordScreen from '../login/resetPasswordScreen/ResetPasswordScreenView';

const iconComponents = require('../../../assets/images/tabbar/components.png');

const tabNavigationDataNotAuth = [
  {
    name: 'Startscreen',
    component: StartScreen,
    icon: iconComponents,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    icon: iconComponents,
  },
  {
    name: 'ResetPasswordScreen',
    component: ResetPasswordScreen,
    icon: iconComponents,
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
    icon: iconComponents,
  },
];

export default tabNavigationDataNotAuth;
