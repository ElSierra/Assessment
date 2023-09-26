import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import Card from "../components/Order/Card";
import { OrderProp } from "../../types/navigation";
import { DummyData } from "../../data/dummyData";
import CardList from "../components/Order/CardList";
import Details from "../components/Order/Details";
import DetailList from "../components/Order/DetailList";

export default function Order({ navigation, route }: OrderProp) {
  const { id } = route.params;
  const data = DummyData.find((data) => data.id === id);
  return (
    <ScrollView
      style={style.root}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <CardList image={data?.image} />
      <Details title={data?.title} />
      <View style={{marginVertical:30}}>
        <DetailList text="Ingredients" />
        <DetailList text="Nutritional Information" />
        <DetailList text="How to Prepare" />
        <DetailList text="Dietary Information" />
        <DetailList text="Storage Information" />
        <DetailList text="Extra" isLast />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  root: { flex: 1, padding: 24 },
});