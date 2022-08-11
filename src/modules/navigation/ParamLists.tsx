import { IPurchase } from "../../@types/PurchaseStorage.d";

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
  PurchaseDetails:IPurchase,
};
