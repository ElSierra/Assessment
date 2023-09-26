import { View, Text, Pressable } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../../../types/navigation";
import { Colors } from "../../colors";

export default function BackToOrderButton({ id }: { id: number }) {
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
          navigation.navigate("Order", { id });
        }}
      >
        <ChevronLeftIcon color={"black"} size={20} />
      </Pressable>
    </View>
  );
}
