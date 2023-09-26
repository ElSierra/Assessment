import { View, Text, Pressable, Alert, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../../../types/navigation";
import { Colors } from "../../colors";

export default function BackToOrderButton({ id }: { id?: number }) {
  console.log("🚀 ~ file: BackToOrderButton.tsx:9 ~ BackToOrderButton ~ id:", id)
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        marginLeft: 24,
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: Colors.borderColor,
        borderWidth: 1,
      }}
    >
      <Pressable
        style={{ padding: 8 }}
        onPress={() => {
          id || id === 0
            ? navigation.navigate("Order", { id })
            : navigation.navigate("Menu");
        }}
      >
        <ChevronLeftIcon color={"black"} size={20} />
      </Pressable>
    </View>
  );
}
