import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "../../colors";
import { TrashIcon } from "react-native-heroicons/outline";
import CartOrderSelector from "./CartOrderSelector";
import { DummyData } from "../../../data/dummyData";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { deleteFromCart } from "../../../store/slice/cart";

export default function CartCard({
  title,
  id,

  quantity,
}: {
  title: string;
  id: number;
  quantity: number;
}) {
  const data = DummyData.find((data) => data.id === id);
  const dispatch = useAppDispatch();
  return (
    <View
      key={id}
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 92,
            height: 92,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={data?.image}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: Colors.primaryText,
              }}
            >
              {title}
            </Text>
          </View>
          <Text style={{ fontFamily: "Poppins-Medium", color: Colors.primary }}>
            £30
          </Text>
          <Pressable
            onPress={() => {
              dispatch(deleteFromCart({ id }));
            }}
          >
            <TrashIcon size={24} color={Colors.iconColor} />
          </Pressable>
        </View>
      </View>
      <CartOrderSelector quantity={quantity} id={id} />
    </View>
  );
}
