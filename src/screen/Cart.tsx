import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { CartProp, HomeNavigationProp, HomeProp } from "../../types/navigation";
import BackToOrderButton from "../components/Order/BackToOrderButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Button from "../components/Global/Button";
import ButtonOutlined from "../components/Global/ButtonOutlined";
import CartCard from "../components/Cart/CartCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import CartFooter from "../components/Cart/CartFooter";

export default function Cart({ navigation, route }: CartProp) {
  const stackNavigation = useNavigation<HomeNavigationProp>();
  const [id, setId] = useState<number | undefined>(undefined);
  console.log("🚀 ~ file: Cart.tsx:12 ~ Cart ~ id:", id);

  useFocusEffect(
    useCallback(() => {
      console.log(route.params);
      setId(route.params?.id);
    }, [route.params?.id])
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        if (id || id === 0) return <BackToOrderButton id={id} />;
      },
    });
  }, [id]);

  const data = [0, 1, 2, 3];

  const renderItem = () => {
    return <CartCard />;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 24, gap: 24 }}
      />
      <CartFooter total={data.length} />
    </View>
  );
}
