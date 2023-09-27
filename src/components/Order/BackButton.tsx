import { View, Text, Pressable, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../colors";

export default function BackButton() {
  const navigation = useNavigation<any>();
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Menu");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        marginLeft: 10,
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: Colors.borderColor,
        borderWidth: 1,
      }}
    >
      <Pressable
        android_ripple={{ color: "#C3C3C3" }}
        style={{ padding: 8 }}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.navigate("Menu");
          }
        }}
      >
        <ChevronLeftIcon color={"black"} size={20} />
      </Pressable>
    </View>
  );
}
