import { View, Text, Image, Pressable } from "react-native";
import { Colors } from "../../colors";
import { TrashIcon } from "react-native-heroicons/outline";
import CartOrderSelector from "./CartOrderSelector";

export default function CartCard() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 92, height: 92 ,justifyContent:"center",alignItems:"center"}}>
          <Image
            source={require("../../assets/images/yam.png")}
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
              Asaro
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: Colors.primaryText,
              }}
            >
              (Yam Porridge)
            </Text>
          </View>
          <Text style={{ fontFamily: "Poppins-Medium", color: Colors.primary }}>
            £30
          </Text>
          <Pressable>
            <TrashIcon size={24} color={Colors.iconColor} />
          </Pressable>
        </View>
      </View>
      <CartOrderSelector />
    </View>
  );
}
