import { IPurchase } from '../../@types/PurchaseStorage.d';

// undefined means there's no props - see: https://reactnavigation.org/docs/navigation-prop/

export type RootStackParamList = {
  LoginScreen: undefined,
  RegisterScreen: undefined,
  ResetPasswordScreen: undefined,
  StartScreen: undefined,
};

export type RootTabParamList = {
  Home: undefined,
  Verlauf: undefined,
  Statistik: undefined,
  Profil: undefined,
};

export type HistoryRootTabParamList = {
  HistoryView: undefined,
  PurchaseDetails: IPurchase,
};

export type StatisticsRootTabParamList = {
  StatisticsView: undefined,
};
