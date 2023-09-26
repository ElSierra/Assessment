import {
  View,
  Text,
  NativeSyntheticEvent,
  TextLayoutEventData,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../colors";

export default function Details({ title }: { title?: string }) {
  const [hasEllipsis, setHasEllipsis] = useState(true);
  const [readMore, setReadMore] = useState(false);

  const handleTextLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>
  ) => {
    const { lines } = event.nativeEvent;
    if (lines.length > 5) {
      setHasEllipsis(true);
    } else {
      setHasEllipsis(false);
    }
  };
  return (
    <View style={{ width: "100%", marginTop: 25 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 16,
            color: Colors.primaryText,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 16,
            color: Colors.primary,
          }}
        >
          £3.99
        </Text>
      </View>
      <Pressable
        onPress={() => {
          setReadMore(false);
        }}
      >
        <Text
          numberOfLines={readMore ? undefined : 5}
          ellipsizeMode="clip"
          onTextLayout={handleTextLayout}
          style={{ fontSize: 12, fontFamily: "Poppins-Medium",color:Colors.primaryText,width:"100%" }}
        >
          Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
          made from yeast dough, shaped into balls and deep-fried until golden
          brown. It has a doughnut-like texture but slightly and is often
          enjoyed as a popular snack or street food in many West African
          countries, particularly Nigeria. Puff puff mix is a versatile treat
          that can be customized with various flavors and toppings, such as
          powdered sugar, cinnamon, or even a drizzle of chocolate sauce. Its
          irresistible combination of crispy outer crust and soft, fluffy
          interior makes it a beloved indulgence that can be found at festivals,
          gatherings, and roadside vendors throughout the region. Whether served
          as a sweet treat or a savory delight, puff puff mix is a beloved
          culinary tradition that brings people together to savor its delightful
          taste and texture.
        </Text>
      </Pressable>
      {!readMore && (
        <Pressable
          onPress={() => {
            setReadMore(!readMore);
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins-Medium",
              color: Colors.primary,
            }}
          >
            ...Read More
          </Text>
        </Pressable>
      )}
    </View>
  );
}
