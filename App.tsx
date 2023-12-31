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
import { Provider } from "react-redux";
import { store } from "./store/store";
import { enableFreeze } from "react-native-screens";
function App(): JSX.Element {
  enableFreeze(true);

  StatusBar.setBarStyle("dark-content");
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("rgba(0,0,0,0)");
    StatusBar.setTranslucent(true);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
