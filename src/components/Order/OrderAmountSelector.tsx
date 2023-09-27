import { View, Text } from "react-native";
import OASButton from "./OASButton";
import { MinusIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { PlusIcon } from "react-native-heroicons/outline";
import { Colors } from "../../colors";

export default function OrderAmountSelector({
  no,
  handleIncrease,
  handleDecrease,
}: {
  no: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <OASButton
        no={no}
        color="black"
        Icon={MinusIcon}
        onPress={handleDecrease}
      />
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: 14,
          color: Colors.primaryText,
        }}
      >
        {no}
      </Text>
      <OASButton color="black" Icon={PlusIcon} onPress={handleIncrease} />
    </View>
  );
}
