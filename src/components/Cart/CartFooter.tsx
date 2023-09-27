import { View, Text } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { formatCurrency } from "../../util/money";
import { Colors } from "../../colors";
import Button from "../Global/Button";
import { useAppSelector } from "../../../store/hooks/hooks";

export default function CartFooter() {
  const bottomHeight = useBottomTabBarHeight();
  const cartData = useAppSelector((state) => state.cart);

  const total = useMemo(() => {
    return cartData.cart.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
  }, [cartData.cart]);

  return (
    <View
      style={{
        position: "absolute",
        bottom: bottomHeight,
        padding: 24,
        gap: 10,
        width: "100%",
        backgroundColor:Colors.backgroundColor
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Text
            style={{ fontFamily: "Poppins-Medium", color: Colors.primaryText }}
          >
            Total
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular", color: Colors.primaryText }}
          >
            ({total} items)
          </Text>
        </View>
        <Text
          style={{ fontFamily: "Poppins-Medium", color: Colors.primaryText }}
        >
          {formatCurrency(total * 30)}
        </Text>
      </View>
      <Button
        title={`Check out - ${formatCurrency(total * 30)} `}
        onPress={() => {}}
      />
    </View>
  );
}
