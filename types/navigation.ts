import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
export type RootStackParamList = {
  Main: any;
  Order: {
    id: number;
  };
};
export type BottomRootStackParamList = {
  Menu: undefined;
  Cart: {
    id?: number;
  };
  Home: undefined;
  Account: undefined;
};

export type HomeNavigationProp = NavigationProp<RootStackParamList, "Main">;
export type OrderNavigationProp = NavigationProp<RootStackParamList, "Order">;
export type OrderProp = NativeStackScreenProps<RootStackParamList, "Order">;
export type HomeProp = NativeStackScreenProps<RootStackParamList, "Main">;
export type CartProp = BottomTabScreenProps<BottomRootStackParamList, "Cart">;
