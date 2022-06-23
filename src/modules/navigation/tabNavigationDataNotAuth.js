import StartScreen from '../login/startScreen/StartScreenViewContainer';
import LoginScreen from '../login/loginScreen/LoginScreenViewContainer';
import RegisterScreen from '../login/registerScreen/RegisterScreenViewContainer';
import ResetPasswordScreen from '../login/resetPasswordScreen/ResetPasswordScreenViewContainer';

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