import { View, Text, Pressable, Platform } from "react-native";
import React, { ElementType } from "react";
import { MinusIcon } from "react-native-heroicons/outline";
import { Colors } from "../../colors";

export default function COSButton({
  color,
  Icon,
  no,
  onPress,
}: {
  color: string;
  Icon: ElementType;
  onPress: () => void;
  no?: number;
}) {
  return (
    <View
      style={{
        backgroundColor: Colors.card,
        borderRadius: 8,
        width: 32,
        height: 32,
    
   
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Pressable
        onPress={onPress}
        disabled={no && no <= 1 ? true : false}
        android_ripple={{ color: "#C7C7C7" }}
        style={({ pressed }) => {
          return {
            opacity: Platform.OS === "ios" && pressed ? 0.5 : 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          };
        }}
      >
        <Icon size={16} color={no && no <= 1 ? "#E1E5E9" : color} />
      </Pressable>
    </View>
  );
}
