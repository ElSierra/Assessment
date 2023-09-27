import {Pressable } from "react-native";
import React, { ElementType, useState } from "react";
import { Colors } from "../../colors";

export default function IconButton({
  Icon,
  IconFocused,
}: {
  Icon: ElementType;
  IconFocused: ElementType;
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setClicked(!clicked);
      }}
    >
      {clicked ? (
        <IconFocused color={Colors.primary} />
      ) : (
        <Icon size={24} color={Colors.primaryText} />
      )}
    </Pressable>
  );
}
