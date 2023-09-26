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

import { Colors } from "react-native/Libraries/NewAppScreen";
import Navigation from "./src/routes/Navigation";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  StatusBar.setBarStyle("dark-content");
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
