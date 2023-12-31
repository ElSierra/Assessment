import { useCallback, useEffect, useState } from "react";
import { FlatList, BackHandler } from "react-native";
import { CartProp, HomeNavigationProp } from "../../types/navigation";
import BackToOrderButton from "../components/Order/BackToOrderButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import CartCard from "../components/Cart/CartCard";

import CartFooter from "../components/Cart/CartFooter";
import AnimatedScreen from "../components/Global/AnimatedScreen";
import { useAppSelector } from "../../store/hooks/hooks";

export default function Cart({ navigation, route }: CartProp) {
  const stackNavigation = useNavigation<HomeNavigationProp>();
  const [id, setId] = useState<number | undefined>(undefined);
  const cartData = useAppSelector((state) => state.cart);
  console.log("🚀 ~ file: Cart.tsx:24 ~ Cart ~ cartData:", cartData);

  useFocusEffect(
    useCallback(() => {
      console.log(route.params);
      setId(route.params?.id);
    }, [route.params?.id])
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <BackToOrderButton id={id} />;
      },
    });
    const backAction = () => {
      id || id === 0
        ? stackNavigation.navigate("Order", { id })
        : navigation.navigate("Menu");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [id]);

  const data = [0, 1, 2, 3];

  const renderItem = ({
    item,
  }: {
    item: {
      id: number;
      quantity: number;
      title: string;
    };
  }) => {
    return (
      <CartCard quantity={item.quantity} id={item.id} title={item.title} />
    );
  };

  return (
    <AnimatedScreen style={{ flex: 1 }}>
      <FlatList
        data={cartData.cart}
        extraData={cartData.cart}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 24, gap: 24, paddingBottom: 400 }}
      />
      <CartFooter />
    </AnimatedScreen>
  );
}
