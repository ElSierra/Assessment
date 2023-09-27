import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../colors";

import { ElementType } from "react";

export default function Button({
  title,
  Icon,
  onPress,
}: {
  title: string;
  Icon?: ElementType;
  onPress: () => void;
}) {
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        overflow: "hidden",
      }}
    >
      <Pressable style={style.pressable} android_ripple={{ color: "#D7CFCF" }} onPress={onPress}>
        <Text style={style.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonText: {
    color: Colors.buttonText,
    fontSize: 14,

    fontFamily: "Poppins-Regular",
    includeFontPadding: false,
  },
  pressable: {
    width: "100%",
    justifyContent: "center",
    gap: 4,

    padding: 20,
    alignItems: "center",
    flexDirection: "row",
  },
});
