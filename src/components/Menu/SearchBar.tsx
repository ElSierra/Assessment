import { View, Text, TextInput } from "react-native";

import React from "react";
import { Colors } from "../../colors";
import { SearchIcon } from "../Global/Icon";

export default function SearchBar() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        width: "100%",
        backgroundColor: Colors.card,
        borderRadius: 8,
        gap: 10,
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: Colors.borderColor,
      }}
    >
      <SearchIcon size={18} color={""} />
      <TextInput
        style={{
          width: "100%",
          fontSize: 18,

          fontFamily: "Poppins-Regular",
          includeFontPadding: false,
        }}
        cursorColor={Colors.primaryText}
        placeholderTextColor={"grey"}
        placeholder="Search"
      />
    </View>
  );
}
