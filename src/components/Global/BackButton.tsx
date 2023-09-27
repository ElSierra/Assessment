import { View, Pressable } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../../../types/navigation";
import { Colors } from "../../colors";

export default function BackButton() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View
      style={{
        padding: 8,
        marginLeft: 10,
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: Colors.borderColor,
        borderWidth: 1,
      }}
    >
      <Pressable
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      >
        <ChevronLeftIcon color={"black"} size={20} />
      </Pressable>
    </View>
  );
}
