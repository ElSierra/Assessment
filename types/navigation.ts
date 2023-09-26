import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Main: undefined;
  Order: {
    id: number;
  };
};
export type BottomRootStackParamList = {
  Menu: undefined;
  Cart: undefined;
  Home: undefined;
  Account: undefined;
};

export type HomeNavigationProp = NavigationProp<RootStackParamList, "Main">;
export type OrderNavigationProp = NavigationProp<RootStackParamList, "Order">;
export type OrderProp = NativeStackScreenProps<
  RootStackParamList,
  "Order"
>;
