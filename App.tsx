/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import Navigation from "./src/routes/Navigation";
import { Colors } from "./src/colors";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  StatusBar.setBarStyle("dark-content");
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
