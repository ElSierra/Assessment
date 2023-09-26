import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomRootStackParamList,
  RootStackParamList,
} from "../../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../screen/Cart";
import Account from "../screen/Account";
import Home from "../screen/Home";
import Menu from "../screen/Menu";
import {
  HomeIcon,
  Squares2X2Icon,
  ShoppingBagIcon,
} from "react-native-heroicons/solid";
import {
  HomeIcon as HomeIconOutline,
  Squares2X2Icon as Square2StackIconOutline,
  ShoppingBagIcon as ShoppingBagIconOutline,
} from "react-native-heroicons/outline";
import { Colors } from "../colors";
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomRootStackParamList>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={({ navigation, route }) => {
        return {
          tabBarIconStyle: { color: Colors.primary, elevation: 0 },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: "gray",
          headerTitleAlign: "center",

          tabBarStyle: { paddingBottom: 25, height: 83, padding: 8 },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              if (focused) {
                return <HomeIcon color={color} size={size} />;
              }
              return <HomeIconOutline color={color} size={size} />;
            }
            if (route.name === "Menu") {
              if (focused) {
                return <Squares2X2Icon color={color} size={size} />;
              }
              return <Square2StackIconOutline color={color} size={size} />;
            }
            if (route.name === "Cart") {
              if (focused) {
                return <ShoppingBagIcon color={color} />;
              }
              return <ShoppingBagIconOutline color={color} />;
            }
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
