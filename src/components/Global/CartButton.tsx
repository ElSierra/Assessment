import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../colors";
import { ShoppingBagIcon as ShoppingBagIconOutline } from "react-native-heroicons/outline";
import { ElementType } from "react";

export default function Button({
  title,
  Icon,
}: {
  title: string;
  Icon?: ElementType;
}) {
  return (
    <View
      style={{
        padding: 5,
        height: 40,
        backgroundColor: Colors.primary,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <Pressable style={style.pressable}>
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
