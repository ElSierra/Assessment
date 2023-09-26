import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { Colors } from "../../colors";
import { ShoppingBagIcon as ShoppingBagIconOutline } from "react-native-heroicons/outline";
import { ElementType } from "react";

export default function ButtonOutlined({
  title,
  Icon,
}: {
  title: string;
  Icon?: ElementType;
}) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.primary,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        overflow: "hidden",
      }}
    >
      <Pressable
        android_ripple={{ color: "#FF030342" }}
        style={({ pressed }) => {
          return [
            style.pressable,
            {
              opacity: Platform.OS === "ios" && pressed ? 0.5 : 1,
            },
          ];
        }}
      >
        <Text style={[style.buttonText, { color: Colors.primary }]}>
          {title}
        </Text>
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
