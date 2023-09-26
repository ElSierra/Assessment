import { View, Text } from "react-native";
import OASButton from "./COSButton";
import { MinusIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { PlusIcon } from "react-native-heroicons/outline";
import { Colors } from "../../colors";

export default function CartOrderSelector() {
  const [no, setNo] = useState(1);
  const handleIncrease = () => {
    setNo(no + 1);
  };
  const handleDecrease = () => {
    if (no > 1) {
      setNo(no - 1);
    }
  };
  return (
    <View
      style={{
        flexDirection: "column",
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
