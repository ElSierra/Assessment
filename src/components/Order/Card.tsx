import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "../../colors";

const { width } = Dimensions.get("screen");
export default function Card({ imageUri }: { imageUri: ImageSourcePropType }) {
  return (
    <View
      style={{
        width: width - 52,
        height: 300,
        marginHorizontal: 2,
        justifyContent: "center",
        backgroundColor: Colors.card,
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <Image
        source={imageUri}
        resizeMode="contain"
        style={{ height: "100%", width: "100%" }}
      />
    </View>
  );
}
