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
import { ProfileIcon } from "../components/Global/Icon";
import Order from "../screen/Order";
import BackButton from "../components/Order/BackButton";
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomRootStackParamList>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: Colors.backgroundColor },
        }}
      >
        <Stack.Screen
          name="Main"
          options={{
            headerShown: false,

            contentStyle: { backgroundColor: Colors.backgroundColor },
          }}
          component={BottomNavigation}
        />
        <Stack.Screen
          name="Order"
          options={{
            headerTitle: "",
            headerShown: true,
            headerStyle: { backgroundColor: "transparent" },
            headerShadowVisible: false,
            headerLeft: () => <BackButton />,
          }}
          component={Order}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      sceneContainerStyle={{ backgroundColor: Colors.backgroundColor }}
      screenOptions={({ navigation, route }) => {
        return {
          tabBarIconStyle: { color: Colors.primary, elevation: 0 },
          tabBarHideOnKeyboard: true,
          headerStyle: {
            elevation: 0,
            borderBottomWidth: 0.5,
            backgroundColor: Colors.backgroundColor,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: "gray",
          headerTitleAlign: "center",
          tabBarLabelStyle: { fontFamily: "Poppins-Medium", fontSize: 14 },
          headerTitleStyle: { fontFamily: "Poppins-Medium", fontSize: 18 },

          tabBarStyle: {
            paddingBottom: 25,
            height: 83,
            backgroundColor: Colors.backgroundColor,
            padding: 8,
            position: "absolute",
            borderColor: Colors.borderColor,
            borderRadius: 8,
            borderWidth: 0.1,
            elevation: 0,
          },
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
            } else {
              return <ProfileIcon color={color} size={size + 4} />;
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
