import { View, Text } from "react-native";
import React from "react";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import { Colors } from "../../colors";


export default function DetailList({
  isLast = false,
  text,
}: {
  isLast?: boolean;
  text: string;
}) {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          justifyContent: "space-between",
          width: "100%",
          flexDirection: "row",
          paddingVertical: 14,
          alignItems: "center",
          borderTopWidth: 1,
          borderColor: Colors.borderColor,
          borderBottomWidth: !isLast ? undefined : 1,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins-Medium",
            color: Colors.primaryText,
          }}
        >
          {text}
        </Text>
        <ChevronDownIcon size={16} color={Colors.primaryText} />
      </View>
    </View>
  );
}
