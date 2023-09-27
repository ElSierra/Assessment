import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
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
        height: 40,
        backgroundColor: Colors.primary,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Pressable
        android_ripple={{ color: "#B5B5B5" }}
        style={({ pressed }) => [
          style.pressable,
          { padding: 5, opacity: Platform.OS === "ios" && pressed ? 0.5 : 1 },
        ]}
        onPress={onPress}
      >
        {Icon && (
          <View style={{ paddingBottom: 2 }}>
            <Icon size={24} color={Colors.buttonText} />
          </View>
        )}
        <Text style={style.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonText: {
    color: Colors.buttonText,
    fontFamily: "Poppins-Regular",
    includeFontPadding: false,
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    gap: 4,
    alignItems: "center",

    flexDirection: "row",
  },
});
