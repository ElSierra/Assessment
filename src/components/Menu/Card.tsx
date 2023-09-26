import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { Colors } from "../../colors";
import Button from "../Global/CartButton";
import {
  ShoppingBagIcon as ShoppingBagIconOutline,
  HeartIcon as HeartIconOutline,
} from "react-native-heroicons/outline";
import IconButton from "../Global/IconButton";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../../../types/navigation";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { addToCart } from "../../../store/slice/cart";
const { width, height } = Dimensions.get("screen");

export default function Card({
  text,
  image,
  id,
}: {
  text: string;
  image: ImageSourcePropType;
  id: number;
}) {
  console.log("🚀 ~ file: Card.tsx:35 ~ image:", image)
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const handleNavigation = () => {
    navigation.navigate("Order", { id });
  };
  return (
    <View style={{ margin: 10, borderRadius: 8, overflow: "hidden" }}>
      <Pressable
        onPress={handleNavigation}
        style={({ pressed }) => {
          return {
            opacity: pressed && Platform.OS === "ios" ? 0.5 : 1,

            borderRadius: 8,
          };
        }}
        android_ripple={{ color: "#EFEFEF", foreground: true }}
      >
        <View style={style.cardRoot}>
          <View style={style.container}>
            <View style={style.itemContainer}>
              <Image
                source={image}
                style={{ width: 90, height: 90 }}
                resizeMethod="resize"
              />
              <View style={style.cardTextContainer}>
                <Text numberOfLines={1} style={style.cardText}>
                  {text}
                </Text>
                <Text style={style.cardPriceText}>£30</Text>
              </View>
            </View>

            <Button
              onPress={() => {
                navigation.navigate("Cart");
                dispatch(
                  addToCart({ id,  title: text, quantity: 1 })
                );
              }}
              Icon={ShoppingBagIconOutline}
              title="Add to cart"
            />
          </View>
          <View
            style={{
              position: "absolute",
              height: "100%",
              width: 24,
              right: 10,
              top: 10,
            }}
          >
            <IconButton Icon={HeartIconOutline} IconFocused={HeartIcon} />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  cardRoot: {
    width: width / 2.4,
    padding: 10,
    paddingTop: 40,
    backgroundColor: Colors.card,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  cardTextContainer: {
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
  cardText: {
    fontFamily: "Poppins-Medium",
    color: Colors.primaryText,
    width: "80%",
    fontSize: 14,
    includeFontPadding: false,
  },
  cardPriceText: {
    fontFamily: "Poppins-Medium",
    color: Colors.primary,
    includeFontPadding: false,
    fontSize: 14,
  },
});
