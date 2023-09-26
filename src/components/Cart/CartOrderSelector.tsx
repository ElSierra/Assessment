import { View, Text } from "react-native";
import OASButton from "./COSButton";
import { MinusIcon } from "react-native-heroicons/solid";
import { useEffect, useState } from "react";
import { PlusIcon } from "react-native-heroicons/outline";
import { Colors } from "../../colors";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { decreaseQuantity, increaseQuantity } from "../../../store/slice/cart";

export default function CartOrderSelector({
  quantity,
  id,
}: {
  quantity: number;
  id: number;
}) {
  const dispatch = useAppDispatch();
  const [no, setNo] = useState(1);

  useEffect(() => {
    setNo(quantity);
  }, [quantity]);
  const handleIncrease = () => {
    dispatch(increaseQuantity({ id }));
    setNo(no + 1);
  };
  const handleDecrease = () => {
    if (no > 1) {
      dispatch(decreaseQuantity({ id }));
      setNo(no - 1);
    }
  };
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <OASButton
        no={no}
        color="black"
        Icon={MinusIcon}
        onPress={handleDecrease}
      />
      <Text
        key={`${id}${quantity}`}
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: 14,
          color: Colors.primaryText,
        }}
      >
        {no}
      </Text>
      <OASButton color="black" Icon={PlusIcon} onPress={handleIncrease} />
    </View>
  );
}
