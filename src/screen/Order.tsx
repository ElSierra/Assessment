import { View, Text, StyleSheet, ScrollView,} from "react-native";
import React, { useState } from "react";

import { OrderProp } from "../../types/navigation";
import { DummyData } from "../../data/dummyData";
import CardList from "../components/Order/CardList";
import Details from "../components/Order/Details";
import DetailList from "../components/Order/DetailList";
import OrderAmountSelector from "../components/Order/OrderAmountSelector";
import Button from "../components/Global/Button";
import ButtonOutlined from "../components/Global/ButtonOutlined";
import Accordion from "react-native-collapsible/Accordion";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addToCart } from "../../store/slice/cart";
const SECTIONS = [
  {
    title: "Ingredients",
    content: "List of ingredients for preparing yam porridge...",
  },
  {
    title: "Nutritional Information",
    content: "Nutritional information for yam porridge...",
  },
  {
    title: "How to Prepare",
    content:
      "To prepare delicious yam porridge, follow these steps:\n1. Peel and dice the yam into bite-sized pieces.\n2. Rinse the diced yam thoroughly in cold water.\n3. In a pot, heat some oil over medium heat.\n4. Add chopped onions, garlic, and ginger to the hot oil and sauté until they become fragrant.\n5. Add chopped tomatoes and red bell peppers, and cook until they soften.\n6. Season the mixture with salt, pepper, and your choice of spices (such as paprika or chili powder).\n7. Add the diced yam to the pot and stir well to coat it with the tomato and pepper mixture.\n8. Pour in enough water to cover the yam and bring it to a simmer.\n9. Cover the pot and let it cook until the yam is tender and the porridge has thickened, stirring occasionally.\n10. Taste and adjust the seasoning as needed.\n11. Serve your delicious yam porridge hot and enjoy!",
  },
  {
    title: "Dietary Information",
    content: "Dietary information for yam porridge...",
  },
  {
    title: "Storage Information",
    content: "Storage information for leftover yam porridge...",
  },
  {
    title: "Extra",
    content: "Additional tips and variations for yam porridge...",
  },
];
export default function Order({ navigation, route }: OrderProp) {
  const { id } = route.params;
  const data = DummyData.find((data) => data.id === id);
  const [active, setActive] = useState([2]);

  const dispatch = useAppDispatch();
  const [no, setNo] = useState(1);
  const handleIncrease = () => {
    setNo(no + 1);
  };
  const handleDecrease = () => {
    if (no > 1) {
      setNo(no - 1);
    }
  };
  return (
    <ScrollView
      style={style.root}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <CardList image={data?.image} />
      <Details title={data?.title} />
      <View style={{ marginVertical: 30 }}>
        <Accordion
          activeSections={active}
          underlayColor="transparent"
          sections={SECTIONS}
          renderContent={(content, index, isActive, sections) => {
            return <Text style={{marginBottom:20}}>{content.content}</Text>;
          }}
          onChange={(index) => {
            setActive(index);
          }}
          renderHeader={(content, index, isActive, sections) => {
            return <DetailList text={content.title} />;
          }}
        />
      </View>
      <OrderAmountSelector
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        no={no}
      />
      <View style={{ gap: 16, marginTop: 24 }}>
        <Button
          title="Add to cart"
          onPress={() => {
            dispatch(
              addToCart({ id, title: data?.title as string, quantity: no })
            );
            navigation.navigate("Main", { screen: "Cart", params: { id: id } });
          }}
        />
        <ButtonOutlined title="Subscribe to a Plan" />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  root: { flex: 1, padding: 24 },
});
